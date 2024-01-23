import { Component } from '@angular/core';
import { Count } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private dataService: DataserviceService){ }
  data: Count[] = this.dataService.products
}
