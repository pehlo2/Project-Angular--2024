import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]'
  user: User | undefined

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lsUser)
    } catch (err) {
      this.user = undefined

    }


  }
  get isLogged():boolean{
    return !!this.user

  }


  login(): void {
    this.user = {
      email: 'john.doe@gmail.com',
      username: 'John'
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }
  logout(): void {
    this.user = undefined
    localStorage.removeItem(this.USER_KEY)
  }
}
