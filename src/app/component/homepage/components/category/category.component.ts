import { Component } from '@angular/core';
import { Img } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private dataService: DataserviceService){ }

  data: Img[] = this.dataService.category
}
