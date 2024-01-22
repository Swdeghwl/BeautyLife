import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { New } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor(private dataServie: DataserviceService){ }
  data: New[] = this.dataServie.news
  
}
