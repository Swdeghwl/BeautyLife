import { Component } from '@angular/core';
import { Img } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-newbrand',
  templateUrl: './newbrand.component.html',
  styleUrls: ['./newbrand.component.css']
})
export class NewbrandComponent {
  constructor(private dataService: DataserviceService){ }
  data:Img[] = this.dataService.newprand
}
