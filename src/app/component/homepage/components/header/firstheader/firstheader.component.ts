import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interface/interface';
import { DataserviceService } from 'src/app/services/data/data.service';
import { SearchService } from 'src/app/services/search/search.service';
import { SituationService } from 'src/app/services/situation/situation.service';


@Component({
  selector: 'app-firstheader',
  templateUrl: './firstheader.component.html',
  styleUrls: ['./firstheader.component.css']
})
export class FirstheaderComponent {
  routerId!: any;
  constructor(private situationService: SituationService, private dataService: DataserviceService,private searchService: SearchService,private router: ActivatedRoute) {
    this.routerId = router.snapshot.paramMap.get('id')
  }

  bool = this.situationService.signIn

  // icons
  search = faSearch
  cart = faCartShopping
  signIn = faSignIn
  singUp = faUser
  home = faHome
  group = faList

  searchEngine(id: any) {
    var data: Product[] = []
    var contnent: string = id.value
    this.dataService.product().forEach(item => {
      var text = []
      text = item.description.name.split(' ')
      text.forEach(value => {
        if(value == contnent){
          data.push(item)
        }
      })
    })
    this.searchService.contnent = contnent
    this.searchService.product = data
  }

  situation = false

  pageSituation(){
    if(this.routerId == 'search'){
      this.situation = false
    } else{
      this.situation = true
    }
  }

  ngOnInit(){
    this.pageSituation()
  }

}
