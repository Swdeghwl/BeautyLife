import { Component, Input } from '@angular/core';
import { Count, HomePage } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // develope data
  @Input('mainData') public data!: Count[] ;
}
