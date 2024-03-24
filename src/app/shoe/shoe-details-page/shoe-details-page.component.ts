import { Component } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoe } from 'src/interfaces/shoe';
import { UserService } from 'src/app/user/user.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-shoe-details-page',
  templateUrl: './shoe-details-page.component.html',
  styleUrls: ['./shoe-details-page.component.css']
})
export class ShoeDetailsPageComponent {
  shoe: Shoe | undefined


  constructor(private shoeService: ShoesService, private activedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) {

  }

  get isOwner() {
    return this.sharedService.isOwner
  }
  get isLogged() {
    return this.sharedService.isLogged
  }

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
  removeShoe() {
    if (confirm("are u sure>")) {
      const id = this.activedRoute.snapshot.params['shoeId']
      this.shoeService.removeShoe(id).subscribe(() => {
        this.router.navigate(['/catalog'])

      })
    }


  }
}
