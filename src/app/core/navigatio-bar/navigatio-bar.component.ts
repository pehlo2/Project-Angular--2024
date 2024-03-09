import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigatio-bar',
  templateUrl: './navigatio-bar.component.html',
  styleUrls: ['./navigatio-bar.component.css']
})
export class NavigatioBarComponent {
constructor(private userService : UserService , private router : Router){}

  get isLogged() :boolean{
     return  this.userService.isLogged
  }


  logout():void{
    this.userService.logout()
   this.router.navigate(['/'])
  }
  


}
