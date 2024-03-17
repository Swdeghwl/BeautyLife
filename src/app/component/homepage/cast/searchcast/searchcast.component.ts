import { Component } from '@angular/core';
import { Product } from 'src/app/interface/interface';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-searchcast',
  templateUrl: './searchcast.component.html',
  styleUrls: ['./searchcast.component.css']
})
export class SearchcastComponent {
  constructor(public searchService: SearchService){ }

}
