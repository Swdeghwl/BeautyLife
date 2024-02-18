import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { limited } from 'src/app/function/function';
import { Img, Product, ProductCast, Products, Slider, imgSituation, productSituation, sliderSituation, typeProduct } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';
import { IdService } from 'src/app/services/id/id.service';

@Component({
  selector: 'app-productcast',
  templateUrl: './productcast.component.html',
  styleUrls: ['./productcast.component.css']
})
export class ProductcastComponent {
  routerId!: any;
  constructor(private rout: ActivatedRoute, private dataServices: DataserviceService, private idService: IdService) {
    this.routerId = this.rout.snapshot.paramMap.get('id')
  }

  data!: ProductCast;

  product(slider: Slider[], category: Img[], newProduct: Products, popularProduct: Products, allProduct: Products,): ProductCast {
    return {
      slider: slider,
      category: category,
      newProduct: newProduct,
      popularProduct:popularProduct,
      allProduct: allProduct,
    }
  }

    ngOnInit(){
      if (this.routerId == 1) {
        this.data = this.product(
          this.dataServices.sliderCategory(sliderSituation.firstSlider),
          this.dataServices.imageCategory(imgSituation.firstAdd),
          {product : limited(this.dataServices.productCategorySituation(typeProduct.firstProduct, productSituation.new), 11), productId: this.idService.firstProductIdProduct().idNew},
          {product : limited(this.dataServices.productCategorySituation(typeProduct.firstProduct, productSituation.popular), 11), productId: this.idService.firstProductIdProduct().idPopular},
          {product: limited(this.dataServices.productCategory(typeProduct.firstProduct), 17), productId: this.idService.firstProductIdProduct().idAll}
          )
      } else if (this.routerId == 2) {
        this.data = this.product(
          this.dataServices.sliderCategory(sliderSituation.secondSlider),
          this.dataServices.imageCategory(imgSituation.secondAdd),
          {product : limited(this.dataServices.productCategorySituation(typeProduct.secondProduct, productSituation.new), 11), productId: this.idService.secondProductIdProduct().idNew},
          {product : limited(this.dataServices.productCategorySituation(typeProduct.secondProduct, productSituation.popular), 11), productId: this.idService.secondProductIdProduct().idPopular},
          {product: limited(this.dataServices.productCategory(typeProduct.secondProduct), 17), productId: this.idService.secondProductIdProduct().idAll}
          )
      } else if (this.routerId == 3) {
        this.data = this.product(
          this.dataServices.sliderCategory(sliderSituation.thirdSlider),
          this.dataServices.imageCategory(imgSituation.thirdAdd),
          {product : limited(this.dataServices.productCategorySituation(typeProduct.thirdProduct, productSituation.new), 11), productId: this.idService.thirdProductIdProduct().idNew},
          {product : limited(this.dataServices.productCategorySituation(typeProduct.thirdProduct, productSituation.popular), 11), productId: this.idService.thirdProductIdProduct().idPopular},
          {product: limited(this.dataServices.productCategory(typeProduct.thirdProduct), 17), productId: this.idService.thirdProductIdProduct().idAll}
          )
      }
    } 
  }
