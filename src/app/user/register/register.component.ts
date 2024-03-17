import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) { }

  register(form: NgForm) {
    if (form.invalid) {
      return
    }
    const { email,username, password,rePassword} = form.value
    this.userService.register(email,username, password,rePassword).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

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


}

