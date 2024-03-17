import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Slider, sliderSituation } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';
import { SearchService } from 'src/app/services/search/search.service';
import { SituationService } from 'src/app/services/situation/situation.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  rotuerId!: any;
  constructor(public situationService: SituationService, public dataService: DataserviceService, public router: ActivatedRoute, private searchServive: SearchService) { 
    this.rotuerId = router.snapshot.paramMap.get('id')
  }

  image: Slider[] = this.dataService.sliderCategory(sliderSituation.sign)
  index = 0
  img: Slider = this.image[this.index]
  situ: boolean = true

  next(){
    this.index++
    if(this.index > this.image.length -1 ){
      this.index = 0
    }
    this.img = this.image[this.index]
    this.class = 'image'
    setTimeout(() => {
      this.class = 'animation'
    }, 700)
  }

  // animation
  class!: string;

  ngOnInit() {
    // animation
    setInterval(() => {
      this.next()
    }, 10000)

    // sign situation
    if(this.rotuerId == 'In'){
      this.situ = false
    } else if(this.rotuerId == 'Up'){
      this.situ = true
    }
  }
}
