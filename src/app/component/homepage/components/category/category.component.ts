import { Component } from '@angular/core';
import { Slider } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private dataService: DataserviceService){ }

  data: Slider[] = this.dataService.category
}
