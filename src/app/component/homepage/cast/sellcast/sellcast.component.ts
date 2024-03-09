import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductId } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-sellcast',
  templateUrl: './sellcast.component.html',
  styleUrls: ['./sellcast.component.css']
})
export class SellcastComponent {
  routerId:any;
  constructor(public rout: ActivatedRoute, public dataService: DataserviceService, public router: Router) { 
    this.routerId = this.rout.snapshot.paramMap.get('id')
  }

  // extract data
  product!:Product;

  data:ProductId = {
    product: this.product,
    productId: ''
  }

  ngOnInit(){
    this.dataService.product().forEach(param => {
      if(param.id == this.routerId){
        this.product = param
      }
    })
    this.data['product'] = this.product
    this.data['productId'] = this.routerId
  }
}
