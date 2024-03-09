import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faAngleRight, faMinus, faPlus, faSearchPlus, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product, ProductId } from 'src/app/interface/interface';
import { CartService } from 'src/app/services/cart/cart.service';
import { SituationService } from 'src/app/services/situation/situation.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  constructor(public router: Router, public situationServices: SituationService, public cartService: CartService, public situationService: SituationService) { }

  // extract data
  @Input('mainData') public data!: ProductId;

  // icon
  star = faStar
  zoom = faSearchPlus
  nextIcon = faAngleRight
  prevIcon = faAngleLeft
  plus = faPlus
  minus = faMinus
  trash = faTrash


  // native

  native() {
    this.router.navigate([''])
  }

  // animation
  boolean: boolean = false

  animation() {
    this.boolean = !this.boolean
  }

  // develope all image

  i: number = 0
  firstNumber: number = this.i + 1

  next() {
    this.i++
    if (this.i >= this.data.product.srcAll.length) {
      this.i = 0
    }
    this.firstNumber = this.i + 1
  }

  prev() {
    this.i--
    if (this.i <= -1) {
      this.i = this.data.product.srcAll.length - 1
    }
    this.firstNumber = this.i + 1
  }

  ngOnInit() {
    this.copy = structuredClone(this.data.product)
    if (this.cartService.info.length == 0) {
      this.optionData = this.data.product.description.situation.filter.filterName[0]
    } else {
      this.optionData = this.cartService.info
    }

    // cart situation

    this.cart.forEach((value) => {
      if (value.id == this.data.productId) {
        this.cartSituation = true
        this.item = value
      }
    })
    this.cartSitun()
  }

  ngOnDestroy(){
    this.cartService.info = ''
    
  }

  // cart situation
  optionData: string = this.cartService.info
  copy!: Product;
  cartSituation: boolean = false
  cartSitun() {
    this.cartSituation = false
    this.cart.forEach((value) => {
      if (value.id == this.data.productId) {
        if (value.description.situation.filter.filterName[0] == this.optionData) {
          this.cartSituation = true
          this.item = value
        }
      }
    })
  }

  // add to cart

  cart = this.cartService.cart
  signIn = this.situationService.signIn
  prices = 0

  addToCart(item: Product) {

    // sort data
    var dataSell = structuredClone(this.data.product)
    dataSell.description.situation.filter.filterName = Array(this.optionData)

    item = dataSell

    if (this.signIn == true) {
      var myBool: boolean = false

      this.cart.forEach(function (value: Product) {
        if (item.id == value.id) {
          if (value.description.situation.filter.filterName[0] == item.description.situation.filter.filterName[0]) {
            myBool = true
          } else {
            myBool = false
          }
        }

      })

      if (myBool == false) {
        this.cart.push(item)
      } else {
        console.log('this product is in the cart')
      }

      this.cartService.allPrice()
    } else {
      console.log('pls sign in')
    }
  }

  // other part of cart

  // cart function

  item!: Product;
  len = this.cart.length
  cartProduct = this.cartService.cart


  plusnumber() {
    this.item.count++
    this.item.whole = this.item.price * this.item.count
    this.cartService.allPrice()
  }

  minusmumber() {
    this.item.count--
    if (this.item.count == 0) {
      this.item.count++
      this.prices += this.item.price
    }
    this.item.whole = this.item.price * this.item.count
    this.cartService.allPrice()
  }

  remove(cart: Product[], item: Product) {
    var i: number = 1000000000
    cart.forEach(value => {
      if(item.id == value.id){
        if(value.description.situation.filter.filterName[0] == this.optionData){
          i = cart.indexOf(value)
        }
      }
    })
    this.cart.splice(i, 1)
    item.count = 1
    this.len = this.cart.length
    item.whole = item.price * item.count
    this.cartService.allPrice()
  }

    // move slider with touch
    post!: number;

    moveTouch(index: number) {
      var delta = index - this.post
  
      if (delta > 70) {
        this.prev()
      } else if (delta < -70) {
        this.next()
      }
    }
}
