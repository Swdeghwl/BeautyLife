import { Component } from '@angular/core';
import { Account } from 'src/app/interface/interface';
import { SituationService } from 'src/app/services/situation/situation.service';

@Component({
  selector: 'app-accountcast',
  templateUrl: './accountcast.component.html',
  styleUrls: ['./accountcast.component.css']
})
export class AccountcastComponent {

  constructor(private situationService:SituationService){ }

  data: Account = this.situationService.account
}
