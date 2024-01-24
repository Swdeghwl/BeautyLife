import { Component, Input } from '@angular/core';
import { Data } from '@angular/router';
import { New } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  // develope data
  @Input('mainData') public data!: New[];
  
}
