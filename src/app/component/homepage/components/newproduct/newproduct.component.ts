import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent {
  constructor(private dataService: DataserviceService){ }
  
  // icons
  right = faAngleRight
  left = faAngleLeft
  star = faStar

  // carousel
  data: Product[] = this.dataService.product
  

  category(){

  }

}
