import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItems } from 'src/interfaces/cartItems';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products = this.cartService.getAllProducts()
  cartTotal: number = 0


  constructor(private cartService: CartService, private router: Router) {

  }

  ngOnInit(): void {
    this.updateCartTotal()
  }
  addItemToCart(item: CartItems) {
    this.cartService.addItemToCart(item)
    this.updateCartTotal()
  }
  removeItemFromCart(shoeId: string) {

    this.cartService.removeFromCart(shoeId)
    this.updateCartTotal()
  }

  onCheckOut() {
    this.cartService.checkOut(this.products).subscribe(() => {
      this.cartService.clearCart()
      this.router.navigate(['/catalog'])
    })
  }

  changeQuantity(value: number, shoeId: string, inputValue: HTMLInputElement) {

    let quantity = this.cartService.setQuantity(value, shoeId)
    if (quantity) {
      inputValue.value = String(quantity)
    }
    this.updateCartTotal()
  }
  updateCartTotal() {
    //the code to update the total property of the cart
    let total = 0;
    this.products.map(elem => total = total + elem.quantity * elem.price);
    this.cartTotal = total;
  }


}
