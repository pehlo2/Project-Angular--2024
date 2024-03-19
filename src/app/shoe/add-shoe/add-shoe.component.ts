import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appImageUrlValidator } from 'src/app/shared/validators/image-url-validator';
import { ShoesService } from '../shoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent {


  constructor(private fb: FormBuilder, private shoeService: ShoesService, private router: Router) {
  }
  form = this.fb.group({
    brand: ['', [Validators.required, Validators.minLength(3)]],
    model: ['', [Validators.required, Validators.minLength(3)]],
    size: ['', [Validators.required,]],
    gender: ['', [Validators.required]],
    price: ['', [Validators.required,]],
    image: ['', [Validators.required, appImageUrlValidator()]],
    description: ['', [Validators.required, Validators.minLength(10)]],

  })

  AddShoe() {
    if (this.form.invalid) {
      return
    }
    const {
      brand,
      model,
      size,
      gender,
      price,
      image,
      description

    } = this.form.value

    this.shoeService.addShoe(
      brand!,
      model!,
      size!,
      gender!,
      price!,
      image!,
      description!,
    ).subscribe(() => {
      this.router.navigate(['/catalog'])
    })
  }
}


