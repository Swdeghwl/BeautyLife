import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faMinus, faPlus, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/interface';
import { CartService } from 'src/app/services/cart/cart.service';
import { SituationService } from 'src/app/services/situation/situation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  [x: string]: any;
  constructor(private cartService: CartService, private situationService: SituationService, private http: HttpClient) { }

  // icon
  star = faStar
  plus = faPlus
  minus = faMinus
  trash = faTrash

  cart: Product[] = this.cartService.cart
  len = this.cart.length
  cartServices = this.cartService
  situation = this.situationService.signIn
  data: Product[][] = []

  plusnumber(item: Product) {
    item.count++
    item.whole = item.price * item.count
    this.cartService.allPrice()
  }

  minusmumber(item: Product) {
    item.count--
    if (item.count == 0) {
      item.count++
      this.cartService.allPrice()
    }
    item.whole = item.price * item.count
    this.cartService.allPrice()
  }

  remove(item: Product) {
    item.count = 1
    this.len = this.cart.length
    item.whole = item.price * item.count
    this.cartService.cart.splice(this.cartService.cart.indexOf(item), 1)
    this.cartService.allPrice()
    this.sortProduct()
    console.log(this.cartService.cart);
  }

  ngOnInit() {
    this.cartService.allPrice()
    this.sortProduct()
  }

  sendData(data: string) {
    this.cartService.info = data
  }

  // sort Product

  sortProduct() {
    this.data = []
    var list: Product[] = []
    if (this.cartService.cart.length != 0) {
      this.cartService.cart.forEach(item => {
        this.cartService.cart.forEach(value => {          
          if (item.id == value.id) {
            list.push(value)
          }
        })
        list = Array.from(new Set(list))
        this.data.push(list)
        list = []
      })
      this.data = Array.from(new Set(this.data))
      this.sort()
    }
  }

  sort() {
    var number: number[] = []
    var array: Product[][] = []
    this.data.forEach(item => {
      this.data.forEach(value => {
        if (item[0].id == value[0].id) {
          number.push(this.data.indexOf(value))
          array.push(value)
        }
      })
      if (array.length > 1) {
        number.splice(number.length - 1, 1)
        number.forEach((value, index) => {
          this.data.splice((value - index), 1)
        })
      }
      number = []
      array = []
    })
  }

  postProduct(content: Product[]): Observable<Product[]>{
    return this.http.post<Product[]>( ' ', content)
  }
}
