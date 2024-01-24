import { Component, Input } from '@angular/core';
import { Img } from 'src/app/interface/interface';

@Component({
  selector: 'app-popularbrand',
  templateUrl: './popularbrand.component.html',
  styleUrls: ['./popularbrand.component.css']
})
export class PopularbrandComponent {
  // develope data
  @Input('mainData') public data!: Img[];
}
