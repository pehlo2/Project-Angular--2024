import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appImageUrlValidator } from 'src/app/shared/validators/image-url-validator';
import { ShoesService } from '../shoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoe } from 'src/interfaces/shoe';

@Component({
  selector: 'app-update-shoe',
  templateUrl: './update-shoe.component.html',
  styleUrls: ['./update-shoe.component.css']
})
export class UpdateShoeComponent implements OnInit {
  shoe: Shoe = {} as Shoe

  constructor(private fb: FormBuilder, private shoeService: ShoesService, private activedRoute: ActivatedRoute, private router: Router) {
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


  ngOnInit(): void {
  
    this.getOneShoe()

  }


  getOneShoe(): void {
    //activated route si vzimame id ot theme-routeing 
    const id = this.activedRoute.snapshot.params['shoeId']
    this.shoeService.getOneShoe(id).subscribe(shoe => {
      this.shoe = shoe


    })

  }



  updateShoe() {
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

    //activated route si vzimame id ot theme-routeing 
    const id = this.activedRoute.snapshot.params['shoeId']
    this.shoeService.updateShoe(id, {
      brand,
      model,
      size,
      gender,
      price,
      image,
      description
    }).subscribe(() => {
      this.router.navigate([`/shoes/${id}`])
    })

  }
}
