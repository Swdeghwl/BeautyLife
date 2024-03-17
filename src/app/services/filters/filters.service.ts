import { Injectable } from '@angular/core';
import { Filter, Product } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  homePage(): Filter {
    return {
      name: "homepage",
      filterType: "color",
      filterName: [

      ]
    }
    
  }

  firstProduct(): Filter {
    return {
      name: "firstProduct",
      filterType: "color",
      filterName: [

      ]
    }
  }

  secondProduct(): Filter {
    return {
      name: "secondProduct",
      filterType: "color",
      filterName: [
        
      ]
    }
  }

  thirdProduct(): Filter {
    return {
      name: "thirdProduct",
      filterType: "color",
      filterName: [
        
      ]
    }
  }

  brands(){
    return {
      name: 'brands',
      filterType:'color',
      filterName: [
        
      ]
    }
  }

  filter(product: Product[]){
    var array: any = []
    product.forEach((value: Product) => {
      value.description.situation.filter.filterName.forEach((item: string) => {
        array.push(item)
      })
    })
    array =Array.from(new Set(array))
    return array
  }
}
