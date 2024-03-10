import { Component, Input } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



//   constructor(private fb: FormBuilder) {
//   }
//   form = this.fb.group({
//     username: ['', [Validators.required, Validators.minLength(5)]],
//     email: ['', [Validators.required, appEmailValidator()]],
//     tel: [''],
//     passGroup: this.fb.group({
//       password: ['', [Validators.required, Validators.minLength(5)],],
//       rePassword: ['', [Validators.required]],


//     }, {
//       validators: [matchPasswordValidator('password', 'rePassword')]
//     })

//   })

// register(){
//   console.log(this.form.value);
  
// }


  register(form: NgForm) {
    if (form.invalid) {
      return
    }
    console.log(form.value);

  }
}

