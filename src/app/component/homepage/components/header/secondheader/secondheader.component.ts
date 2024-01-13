import { Component } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-secondheader',
  templateUrl: './secondheader.component.html',
  styleUrls: ['./secondheader.component.css']
})
export class SecondheaderComponent {
  list = faList
  down = faSortDown
}
