import { Component } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { findIndex } from 'rxjs';
import { Img } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  // icons
  right = faAngleRight
  left = faAngleLeft

  // slider part
  constructor(private dataService: DataserviceService) { }
  data: Img[] = this.dataService.slider
  img: Img = this.data[0]

  number: number = this.data.indexOf(this.img)
  zIndex = 'z-1'
  index = 0


  ngOnInit() {
    setInterval(() => {
      this.next()
    }, 10000)
  }

  next() {
    this.index++
    if (this.index >= this.data.length) {
      this.index = 0
    }
    // animation
    this.zIndex = 'z-3'

    setTimeout(() => {
      this.zIndex = 'z-1'
    }, 150)

    this.img = this.data[this.index]
    this.number = this.data.indexOf(this.img)
  }

  prev() {
    this.index--
    if (this.index <= -1) {
      this.index = this.data.length - 1
    }
    // animation
    this.zIndex = 'z-3'

    setTimeout(() => {
      this.zIndex = 'z-1'
    }, 150)

    this.img = this.data[this.index]
    this.number = this.data.indexOf(this.img)
  }

  move(index: number) {
    this.number = index
    this.index = index
    this.img = this.data[this.index]

    // animation
    this.zIndex = 'z-3'

    setTimeout(() => {
      this.zIndex = 'z-1'
    }, 150)
  }

  // move slider with touch
  post!: number;

  moveTouch(index: number){
    var delta = index - this.post

    if(delta > 40){
      this.next()
    }else if(delta < -40){
      this.prev()
    }
  }
}
