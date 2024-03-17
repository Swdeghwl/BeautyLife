import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, imgSituation, typeProduct } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-situationcast',
  templateUrl: './situationcast.component.html',
  styleUrls: ['./situationcast.component.css']
})
export class SituationcastComponent {
  routerId!: any;
  constructor(private rout: Router,private router: ActivatedRoute, private dataService: DataserviceService){
    this.routerId = this.router.snapshot.paramMap.get('id')
  }

  data!: Product[];

  back(){
    this.rout.navigate([''])
  }
  
  ngOnInit(){
    this.dataService.image().forEach(item => {
      if(item.routerId == this.routerId){
        if(item.situation == imgSituation.firstAdd){
          var x = typeProduct.firstProduct
          this.data = this.dataService.productCategorySituation(x, item.target)
        } else if(item.situation == imgSituation.secondAdd){
          var x = typeProduct.secondProduct
          this.data = this.dataService.productCategorySituation(x, item.target)
        } else if(item.situation == imgSituation.thirdAdd){
          var x = typeProduct.thirdProduct
          this.data = this.dataService.productCategorySituation(x, item.target)
        } else if(item.situation == imgSituation.homepageAdd){
          this.data = this.dataService.productSituation(item.target)
          console.log(this.data); 
        }
      }
    })
  }
}
