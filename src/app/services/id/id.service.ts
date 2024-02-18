import { Injectable } from '@angular/core';
import { IdProduct } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  constructor() { }

  homePage(): IdProduct {
    return {
      idNew: 'homepageNew7648',
      idPopular: 'homepagePopular7648',
    }
  }

  firstProductIdProduct(): IdProduct {
    return {
        idNew: 'firstNew7648',
        idPopular: 'firstPopular7648',
        idAll: 'firstAll7648',
      }
  }

  secondProductIdProduct(): IdProduct {
    return {
      idNew: 'secondNew7648',
      idPopular: 'secondPopular7648',
      idAll: 'secondAll7648',
    }
  }

  thirdProductIdProduct(): IdProduct {
    return {
      idNew: 'thirdNew7648',
      idPopular: 'thirdPopular7648',
      idAll: 'thirdAll7648',
    }
  }
}
