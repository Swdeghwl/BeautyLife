import { Component, Input } from '@angular/core';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interface/interface';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {
  // develope data
  @Input('mainData') public data!:Product[];

  // icons
  right = faAngleRight
  left = faAngleLeft
  star = faStar
}
