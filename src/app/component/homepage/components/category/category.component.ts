import { Component, Input } from '@angular/core';
import { HomePage, Img } from 'src/app/interface/interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  // develope data
  
  @Input('mainData') public data!: Img[];
}
