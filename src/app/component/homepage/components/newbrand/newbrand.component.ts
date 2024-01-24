import { Component, Input } from '@angular/core';
import { Img, Product } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-newbrand',
  templateUrl: './newbrand.component.html',
  styleUrls: ['./newbrand.component.css']
})
export class NewbrandComponent {
  // develope data
  @Input('mainData') public data!: Img[];
}
