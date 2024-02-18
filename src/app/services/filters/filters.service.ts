import { Injectable } from '@angular/core';
import { Filter } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  homePage(): Filter[] {
    return [{
      name: "homepage",
      filterType: "color",
      filterName: [
        'black', 'cyan', 'blue', 'red'
      ]
    },
    {
      name: "homepage",
      filterType: "sutible",
      filterName: [
        'wet', 'dry'
      ]
    },
    ]
  }

  firstProduct(): Filter[] {
    return [{
      name: "firstProduct",
      filterType: "color",
      filterName: [
        'black', 'cyan', 'blue', 'red', 'purple'
      ]
    },
    {
      name: "firstProduct",
      filterType: "sutible",
      filterName: [
        'wet', 'dry'
      ]
    },
    ]
  }

  secondProduct(): Filter[] {
    return [{
      name: "secondProduct",
      filterType: "color",
      filterName: [
        'black', 'orange', 'blue', 'red'
      ]
    },
    {
      name: "secondProduct",
      filterType: "sutible",
      filterName: [
        'wet', 'dry'
      ]
    },
    ]
  }

  thirdProduct(): Filter[] {
    return [{
      name: "thirdProduct",
      filterType: "color",
      filterName: [
        'black', 'cyan', 'blue', 'red'
      ]
    },
    {
      name: "thirdProduct",
      filterType: "sutible",
      filterName: [
        'wet', 'dry'
      ]
    },
    ]
  }
}
