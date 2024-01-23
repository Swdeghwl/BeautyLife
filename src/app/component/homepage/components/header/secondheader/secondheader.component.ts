import { Component, HostListener, Inject } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-secondheader',
  templateUrl: './secondheader.component.html',
  styleUrls: ['./secondheader.component.css']
})
export class SecondheaderComponent {
  // icon
  list = faList
  down = faSortDown

  // header animation
  animation: boolean = false

  @HostListener('window:scroll',['$event']) onScrollEvent(){
    if(window.scrollY > 1200){
      this.animation = true
    }else {
      this.animation = false
    }
  }
}
