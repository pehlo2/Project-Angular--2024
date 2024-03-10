import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appImageUrlValidator } from 'src/app/shared/validators/image-url-validator';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent {


  constructor(private fb: FormBuilder) {
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

  submitCreate() {

    console.log(this.form.value);

  }
}
