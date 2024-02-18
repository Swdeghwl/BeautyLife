import { Component, Input } from '@angular/core';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product, Products } from 'src/app/interface/interface';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent {
  // develope data

  @Input('mainData') public data!: Products;

  // icons
  right = faAngleRight
  left = faAngleLeft
  star = faStar

}
