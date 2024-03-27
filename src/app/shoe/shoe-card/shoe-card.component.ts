import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shopping-cart/cart.service';
import { CartItems } from 'src/interfaces/cartItems';
import { Shoe } from 'src/interfaces/shoe';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.css']
})
export class ShoeCardComponent {
  @Input() shoe!: Shoe

  constructor(private cartService :CartService){

  }

  addToCard(item:CartItems){
    this.cartService.addItemToCart(item)
  }
}
