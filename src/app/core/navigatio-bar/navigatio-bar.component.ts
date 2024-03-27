import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ErrorService } from '../error/error.service';

@Component({
  selector: 'app-navigatio-bar',
  templateUrl: './navigatio-bar.component.html',
  styleUrls: ['./navigatio-bar.component.css']
})
export class NavigatioBarComponent implements OnInit {
  errorMessage: string = '';
  constructor(private userService: UserService, private router: Router, private errorService: ErrorService) { }




  ngOnInit(): void {
    this.errorService.apiError$.subscribe(errorMessage => {
      this.errorMessage = errorMessage
    })
  }


  get isLogged(): boolean {
    return this.userService.isLogged
  }


  logout(): void {
    this.userService.logout().subscribe({

      next: () => {
        this.router.navigate(['/'])
      },
      error: () => {
        this.router.navigate(['/'])
      }
    })

  }



}
