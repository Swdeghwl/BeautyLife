import { Component } from '@angular/core';
import { Count, Img } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  constructor(private dataServices: DataserviceService){ }
  data: Count[] = this.dataServices.side
}
