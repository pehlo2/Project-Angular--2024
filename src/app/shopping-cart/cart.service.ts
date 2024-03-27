import { HttpClient } from '@angular/common/http';
import { ApplicationRef, ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { CartItems } from 'src/interfaces/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  products: CartItems[] = []
  cartTotal: number = 0

  constructor(private http: HttpClient) {
    this.loadCartData()
  }
 

  addItemToCart(item: CartItems) {
    let findProduct = this.products.find(element => element.shoeId == item.shoeId);
    if (findProduct) {

      findProduct.quantity += item.quantity;
    } else {

      this.products.push(item);
    }
   
    this.saveCartData();
   
  }
  removeFromCart(shoeId: string) {
    let index = this.products.findIndex(element => element.shoeId == shoeId)
    this.products.splice(index, 1)
   
  }

  checkOut(products: CartItems[]) {
    return this.http.post<CartItems>('/api/orders', { products })
  }

  getAllProducts() {
   
    return this.products
  }
  clearCart() {
    localStorage.removeItem('cart')
    this.products = []
    
  }


  loadCartData() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.products = JSON.parse(cartData);
    }
  }


  saveCartData() {
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  setQuantity(value: number, shoeId: string) {

    //  const value = (event.target as HTMLInputElement).value


    let index = this.products.findIndex(element => element.shoeId == shoeId);
    if (index == -1) {
      return null
    }
    if (value >= 1) {
      this.products[index].quantity = value
      this.saveCartData();
    }
    
    return this.products[index].quantity
  }

}
