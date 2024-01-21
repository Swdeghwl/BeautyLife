import { Component } from '@angular/core';
import { Img } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-popularbrand',
  templateUrl: './popularbrand.component.html',
  styleUrls: ['./popularbrand.component.css']
})
export class PopularbrandComponent {
  constructor(private dataService: DataserviceService){ }
  data:Img[] = this.dataService.newprand
}
