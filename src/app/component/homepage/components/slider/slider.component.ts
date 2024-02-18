import { Component, Input } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Slider } from 'src/app/interface/interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  // develope data
  @Input('mainData') public data!: Slider[];

  // icons
  right = faAngleRight
  left = faAngleLeft

  // slider part
  zIndex = 'z-1'
  index: number = 0


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
  }

  move(index: number) {
    this.index = index

    // animation
    this.zIndex = 'z-3'

    setTimeout(() => {
      this.zIndex = 'z-1'
    }, 150)
  }

  // move slider with touch
  post!: number;

  moveTouch(index: number) {
    var delta = index - this.post

    if (delta > 70) {
      this.prev()
    } else if (delta < -70) {
      this.next()
    }
  }
}
