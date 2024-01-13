import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-firstheader',
  templateUrl: './firstheader.component.html',
  styleUrls: ['./firstheader.component.css']
})
export class FirstheaderComponent {
  // icons

  search = faSearch
  cart = faCartShopping
  signIn = faSignIn
  singUp = faUser
  home = faHome
  group = faList
}
