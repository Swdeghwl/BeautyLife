import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/services/data/data.service';
import { FiltersService } from 'src/app/services/filters/filters.service';
import { Brand, Filter, FilterCast, Product, countSituatoin, productSituation, typeProduct } from 'src/app/interface/interface';
import { ActivatedRoute } from '@angular/router';
import { IdService } from 'src/app/services/id/id.service';

@Component({
  selector: 'app-filtercast',
  templateUrl: './filtercast.component.html',
  styleUrls: ['./filtercast.component.css']
})
export class FiltercastComponent {
  routerId!: any;
  constructor(private dataService: DataserviceService, private filterService: FiltersService, private idservices: IdService , private rout: ActivatedRoute) {
  this.routerId = this.rout.snapshot.paramMap.get('id')
  }

  data!: FilterCast;

  addFilter(array: Product[], filter: Filter) {
    var data: FilterCast = {
      product: [],
      filter: {
        name: '',
        filterName: [],
        filterType: '',
      }
    }

    data.product = array;
    data.filter = filter

    data.filter.filterName = this.filterService.filter(array)

    return data
  }

  ngOnInit() { 
    if(this.routerId == this.idservices.homePage().idNew) {
      this.data = this.addFilter(this.dataService.productSituation(productSituation.new), this.filterService.homePage())
    } else if(this.routerId == this.idservices.homePage().idPopular) {
      this.data = this.addFilter(this.dataService.productSituation(productSituation.popular), this.filterService.homePage())
    } else if(this.routerId == this.idservices.firstProductIdProduct().idNew) {
      this.data = this.addFilter(this.dataService.productCategorySituation(typeProduct.firstProduct, productSituation.new), this.filterService.firstProduct())
    } else if(this.routerId == this.idservices.firstProductIdProduct().idPopular) {
      this.data = this.addFilter(this.dataService.productCategorySituation(typeProduct.firstProduct, productSituation.popular), this.filterService.firstProduct())
    } else if(this.routerId == this.idservices.firstProductIdProduct().idAll) {
      this.data = this.addFilter(this.dataService.productCategory(typeProduct.firstProduct), this.filterService.firstProduct())
    } else if(this.routerId == this.idservices.secondProductIdProduct().idNew) {
      this.data = this.addFilter(this.dataService.productCategorySituation(typeProduct.secondProduct, productSituation.new), this.filterService.secondProduct())
    } else if(this.routerId == this.idservices.secondProductIdProduct().idPopular) {
      this.data = this.addFilter(this.dataService.productCategorySituation(typeProduct.secondProduct, productSituation.popular), this.filterService.secondProduct())
    } else if(this.routerId == this.idservices.secondProductIdProduct().idAll) {
      this.data = this.addFilter(this.dataService.productCategory(typeProduct.secondProduct), this.filterService.secondProduct())
    } else if(this.routerId == this.idservices.thirdProductIdProduct().idNew) {
      this.data = this.addFilter(this.dataService.productCategorySituation(typeProduct.thirdProduct, productSituation.new), this.filterService.thirdProduct())
    } else if(this.routerId == this.idservices.thirdProductIdProduct().idPopular) {
      this.data = this.addFilter(this.dataService.productCategorySituation(typeProduct.thirdProduct, productSituation.popular), this.filterService.thirdProduct())
    } else if(this.routerId == this.idservices.thirdProductIdProduct().idAll) {
      this.data = this.addFilter(this.dataService.productCategory(typeProduct.thirdProduct), this.filterService.thirdProduct())
    } else(
      this.dataService.countCategory(countSituatoin.brand).forEach(item => {
        if(item.routerId == this.routerId){
          if(item.routerId == '4'){
            var x = Brand.brand_1
            this.data = this.addFilter(this.dataService.prodctBrand(x), this.filterService.brands())
          } else if(item.routerId == '5'){
            var x = Brand.brand_2
            this.data = this.addFilter(this.dataService.prodctBrand(x), this.filterService.brands())
          } else if(item.routerId == '6'){
            var x = Brand.brand_3
            this.data = this.addFilter(this.dataService.prodctBrand(x), this.filterService.brands())
          } else if(item.routerId == '7'){
            var x = Brand.brand_4
            this.data = this.addFilter(this.dataService.prodctBrand(x), this.filterService.brands())
          } else if(item.routerId == '8'){
            var x = Brand.brand_5
            this.data = this.addFilter(this.dataService.prodctBrand(x), this.filterService.brands())
          } else if(item.routerId == '9'){
            var x = Brand.brand_6
            this.data = this.addFilter(this.dataService.prodctBrand(x), this.filterService.brands())
          }
        }
      })
    )
  }
}
