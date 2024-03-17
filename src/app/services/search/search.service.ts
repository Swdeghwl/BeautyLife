import { Injectable } from '@angular/core';
import { Product } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  contnent:string = ''
  product!: Product[];
}
