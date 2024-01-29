import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePage, ProductCast } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-productcast',
  templateUrl: './productcast.component.html',
  styleUrls: ['./productcast.component.css']
})
export class ProductcastComponent {
  routerId!: any;
  constructor(private rout: ActivatedRoute, private dataServices: DataserviceService){
    this.rout.queryParamMap.subscribe(param => this.routerId = param.get('id'))
  }
  homepage: HomePage = this.dataServices.homepage()
  data!: ProductCast;

  ngOnInit(){
    if(this.routerId == this.homepage.products[0].routerId){
      this.data = this.dataServices.firstproduct()
    }else if(this.routerId == this.homepage.products[1].routerId){
      this.data = this.dataServices.secondproduct()
    } else if(this.routerId == this.homepage.products[2].routerId){
      this.data = this.dataServices.thirdproduct()
    }
  }
}
