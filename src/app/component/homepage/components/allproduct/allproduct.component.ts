import { Component, Input } from '@angular/core';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interface/interface';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent {
  // develope data

  @Input('mainData') public data!: Product[];

  // icons
  right = faAngleRight
  left = faAngleLeft
  star = faStar

}
