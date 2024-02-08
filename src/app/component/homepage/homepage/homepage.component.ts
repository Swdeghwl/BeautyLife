import { Component } from '@angular/core';
import { AllProduct, HomePage } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private dataService: DataserviceService){ }
  
  data: HomePage = this.dataService.homepage()
  Data: AllProduct = this.dataService.allproduct()
}
