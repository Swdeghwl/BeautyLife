import { Component } from '@angular/core';
import {  Count, HomePage, Img, New, Product, Products, Slider, countSituatoin, imgSituation, productSituation, sliderSituation } from 'src/app/interface/interface';
import { limited } from 'src/app/function/function'
import { DataserviceService } from 'src/app/services/data/data.service';
import { IdService } from 'src/app/services/id/id.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private dataService: DataserviceService, private idServices: IdService) { }

  slider: Slider[] = this.dataService.sliderCategory(sliderSituation.homepageSlider)
  category: Img[] = this.dataService.imageCategory(imgSituation.homepageAdd)
  products: Count[] = this.dataService.countCategory(countSituatoin.product)
  newProduct: Products = {product : limited(this.dataService.productSituation(productSituation.new), 11), productId : this.idServices.homePage().idNew}
  newImg: Img[] = this.dataService.imageCategory(imgSituation.new)
  popularProduct: Products = {product : limited(this.dataService.productSituation(productSituation.popular), 11), productId : this.idServices.homePage().idPopular}
  popularImg: Img[] = this.dataService.imageCategory(imgSituation.popular)
  brands: Count[] = this.dataService.countCategory(countSituatoin.brand)
  news: New[] = limited(this.dataService.news(), 6)

  data: HomePage = {
    slider: this.slider,
    category: this.category,
    products: this.products,
    newProduct: this.newProduct,
    newImg: this.newImg,
    popularProduct: this.popularProduct,
    popularImg: this.popularImg,
    brands: this.brands,
    news: this.news,
  }

  ngOnInit(){
    this.dataService.getCount()
    this.dataService.getImage()
    this.dataService.getNews()
    this.dataService.getProduct()
    this.dataService.getSlider()
  }

}