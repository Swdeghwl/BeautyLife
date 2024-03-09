import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { faClose, faFilter, } from '@fortawesome/free-solid-svg-icons';
import { FilterCast, Product } from 'src/app/interface/interface';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  // data binding
  @Input('mainData') public alldata!: FilterCast;

  // icon
  filterico = faFilter
  close = faClose

  // filter design
  design: boolean = false

  designChanger() {
    this.design = !this.design
    console.log(this.design);
  }

  // filter

  product: Product[] = []
  filterNames: any = []
  firstPrice: number = 0
  secondPrice: number = 0
  price: Product[] = []

  filter(title: string, proprty: string) {
    var products: Product[] = []
    this.alldata.product.forEach((item) => {
      var target: string[] = []
      var list: any = []
      var value = item.description.situation.filter
      target.push(value.filterType)
      list.push(value.filterName)
      
      target.forEach((value) => {
        if (value == title) {
          list.forEach((value: string[]) => {
            value.forEach((value: string) => {
              if (value == proprty) {
                products.push(item)
              }
            })
          })
        }
      })
    })
    if (this.product.length == 0) {
      this.product = products
    } else {
      this.product.forEach((valueproduct) => {
        products.forEach((itemproduct: Product) => {
          if (valueproduct.id == itemproduct.id) {
            var index: number = products.indexOf(itemproduct)
            products.splice(index, 1)
          }
        })
      })
      products.forEach((value: Product) => {
        this.product.push(value)
      })
    }
  }

  arFilter(title: string, proprty: string) {
    if (this.filterNames.length == 0) {
      this.filter(title, proprty)
      this.filterNames.push({ title: title, proprty: proprty })
    } else {
      var bool: boolean = true
      this.filterNames.forEach((value: any) => {
        if (proprty == value.proprty) {
          var index: number = this.filterNames.indexOf(value)
          this.filterNames.splice(index, 1)

          bool = false

          this.product = []
          this.filterNames.forEach((value: any) => {
            this.filter(value.title, value.proprty)
          })
        }
      })
      if (bool == true) {
        this.filter(title, proprty)
        this.filterNames.push({ title: title, proprty: proprty })
      }
    }
  }

  priceRange() {
    if (this.firstPrice == null || this.firstPrice < 0) {
      this.firstPrice = 0
    } else if (this.secondPrice == null || this.secondPrice < 0) {
      this.secondPrice = 0
    }
    var priceList: Product[] = []
    if (this.product.length == 0) {
      if (this.firstPrice != 0 && this.secondPrice != 0) {
        this.alldata.product.forEach((value: Product) => {
          if (value.price >= this.firstPrice && value.price <= this.secondPrice) {
            priceList.push(value)
          }
        })
        this.price = priceList
      } else if (this.firstPrice != 0 && this.secondPrice == 0) {
        this.alldata.product.forEach((value: Product) => {
          if (value.price >= this.firstPrice) {
            priceList.push(value)
          }
        })
        this.price = priceList
      } else if (this.firstPrice == 0 && this.secondPrice != 0) {
        this.alldata.product.forEach((value: Product) => {
          if (value.price <= this.secondPrice) {
            priceList.push(value)
          }
        })
        this.price = priceList
      } else {
        this.price = []
      }
    } else {
      if (this.firstPrice != 0 && this.secondPrice != 0) {
        this.product.forEach((value: Product) => {
          if (value.price >= this.firstPrice && value.price <= this.secondPrice) {
            priceList.push(value)
          }
        })
        this.price = priceList
      } else if (this.firstPrice != 0 && this.secondPrice == 0) {
        this.product.forEach((value: Product) => {
          if (value.price >= this.firstPrice) {
            priceList.push(value)
          }
        })
        this.price = priceList
      } else if (this.firstPrice == 0 && this.secondPrice != 0) {
        this.product.forEach((value: Product) => {
          if (value.price <= this.secondPrice) {
            priceList.push(value)
          }
        })
        this.price = priceList
      }
      else {
        this.price = []
      }
    }
  }

  default() {
    this.firstPrice = 0
    this.secondPrice = 0
    this.price = []
    this.priceRange()
  }

  products() {
    if (this.product.length == 0 && this.price.length != 0) {
      return this.price;
    } else if (this.product.length != 0 && this.price.length == 0 && this.firstPrice != 0 && this.secondPrice != 0) {
      return [];
    } else if (this.product.length != 0 && this.price.length == 0 && this.firstPrice == 0 && this.secondPrice != 0) {
      return [];
    } else if (this.product.length != 0 && this.price.length == 0 && this.firstPrice != 0 && this.secondPrice == 0) {
      return [];
    } else if (this.product.length != 0 && this.price.length == 0 && this.firstPrice == 0 && this.secondPrice == 0) {
      return this.product;
    } else if (this.product.length == 0 && this.price.length == 0 && this.firstPrice != 0 && this.secondPrice != 0) {
      return [];
    } else if (this.product.length == 0 && this.price.length == 0 && this.firstPrice == 0 && this.secondPrice != 0) {
      return [];
    } else if (this.product.length == 0 && this.price.length == 0 && this.firstPrice != 0 && this.secondPrice == 0) {
      return [];
    } else if (this.product.length == 0 && this.price.length == 0 && this.firstPrice == 0 && this.secondPrice == 0) {
      return this.alldata.product;
    } else {
      return this.price
    }
  }
}
