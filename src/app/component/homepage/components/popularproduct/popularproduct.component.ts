import { Component, Input } from '@angular/core';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interface/interface';

@Component({
  selector: 'app-popularproduct',
  templateUrl: './popularproduct.component.html',
  styleUrls: ['./popularproduct.component.css']
})
export class PopularproductComponent {
  // develope data

  @Input('mainData') public data!: Product[];

  // icons
  right = faAngleRight
  left = faAngleLeft
  star = faStar

  // carousel
  product: any = []
  number: number = 0
  slide!: Product[]
  zIndex = 'z-1'

  category(array1: any, array2: Product[], number: number) {
    var i = 0
    var num = array2.length
    var floor = Math.floor(num / number)

    var view: any = []
    array2.forEach((value) => {
      view.push(value)
    }
    )

    while (i < floor) {
      var x = view.splice(0, number)
      array1.push(x)
      i++
    }
    if (view.length != 0) {
      array1.push(view)
    }
    this.slide = array1[this.number]
  }


  // all products
  boolean: boolean = false

  ngOnInit() {
    if (window.innerWidth > 991.5) {
      this.category(this.product, this.data, 6)
    } else if (window.innerWidth > 767) {
      this.category(this.product, this.data, 4)
    } else {
      this.category(this.product, this.data, 3)
    }
  }

  next() {
    this.number++
    if (this.number >= this.product.length) {
      this.number = 0
    }
    // animation
    this.zIndex = 'z-3'

    setTimeout(() => {
      this.zIndex = 'z-1'
    }, 150)
    this.slide = this.product[this.number]
    
    if(this.product[this.product.length - 1] == this.slide) {
      this.boolean = true
    } else {
      this.boolean = false
    }
  }

  prev() {
    this.number--
    if (this.number <= -1) {
      this.number = this.product.length - 1
    }
    // animation
    this.zIndex = 'z-3'

    setTimeout(() => {
      this.zIndex = 'z-1'
    }, 150)
    this.slide = this.product[this.number]
    
    if(this.product[this.product.length - 1] == this.slide) {
      this.boolean = true
    } else {
      this.boolean = false
    }
  }

  // move slider with touch
  post!: number;

  moveTouch(index: number) {
    var delta = index - this.post

    if (delta > 40) {
      this.next()
    } else if (delta < -40) {
      this.prev()
    }
  }
}
