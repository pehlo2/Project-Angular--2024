import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ShoesService } from '../shoe/shoes.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private shoeService: ShoesService, private userService: UserService) { }

  get isOwner(): boolean {
    return this.shoeService.shoeOwnerId === this.userService.userId
  }
  get isLogged(): boolean {
    return this.userService.isLogged
  }
}
