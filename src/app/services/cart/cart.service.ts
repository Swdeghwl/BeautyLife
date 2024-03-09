import { Injectable } from '@angular/core';
import { Product, productSituation, typeProduct } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Product[] =[

  ]
  
  prices = 0
  
  off = 0

  allPrice(){
    var price= 0
    this.cart.forEach(item => {
      price += item.whole
    })
    this.prices = price

    // off

    var offPrice= 0
    var mult = 0
    this.cart.forEach(item => {
      mult = item.count * item.off
      offPrice += mult
    })
    this.off = offPrice
  }

  // info
  info: string = ''
}
