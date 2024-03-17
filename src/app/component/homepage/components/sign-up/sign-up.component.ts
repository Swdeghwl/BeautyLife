import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact, ContactIn } from 'src/app/class/claas';
import { SituationService } from 'src/app/services/situation/situation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private situationService: SituationService, private rout: Router){ }

  signContact!: FormGroup;

  ngOnInit(){
    this.signContact = new FormGroup({
      userName: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(12)
        ]
      ),
    })
  }

  sendInfo(){
    const content = new ContactIn(
      this.signContact.controls['userName'].value,
      this.signContact.controls['password'].value,
    )
    this.situationService.postSignUp(content).subscribe(item => {
      if(item.status == 'Success'){
        this.rout.navigate([''])
        this.situationService.getAccount().subscribe(param => {this.situationService.account = param})
      } else{
        console.log('Errore');
      }
    })
  }
}
