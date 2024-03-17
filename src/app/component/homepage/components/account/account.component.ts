import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faAddressCard, faBirthdayCake, faFlag, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { Account } from 'src/app/interface/interface';
import { SituationService } from 'src/app/services/situation/situation.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private situationService: SituationService, private rout: Router){ }

  @Input('mainData') public data!: Account;

  // icon
  account = faUserAstronaut
  address = faAddressCard
  national = faFlag
  birthday = faBirthdayCake

  // sign out

  signOut(){
    this.situationService.signIn = false
    this.situationService.account = {
      userName: '',
      address: '',
      email: '',
      name: '',
      birthday: '',
      national: ''
    }
    this.rout.navigate(['/'])
  }
}