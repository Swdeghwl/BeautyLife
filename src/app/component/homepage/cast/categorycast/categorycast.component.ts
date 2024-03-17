import { Component } from '@angular/core';
import { limited } from 'src/app/function/function';
import { Category, Count, Img, New, countSituatoin, imgSituation } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-categorycast',
  templateUrl: './categorycast.component.html',
  styleUrls: ['./categorycast.component.css']
})
export class CategorycastComponent {

  constructor(private dataService: DataserviceService){ }

  products: Count[] = this.dataService.countCategory(countSituatoin.product)
  brands: Count[] = this.dataService.countCategory(countSituatoin.brand)
  news: New[] = limited(this.dataService.news(), 4)


  data: Category = {
    products: this.products,
    brands: this.brands,
    news: this.news
  }
}
