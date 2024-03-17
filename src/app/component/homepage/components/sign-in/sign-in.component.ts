import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/class/claas';
import { SituationService } from 'src/app/services/situation/situation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private situationService: SituationService, private rout: Router){ }

  signContact!: FormGroup;

  ngOnInit(){
    this.signContact = new FormGroup({
      userName: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(12)
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      repeatPass: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      email: new FormControl(
        null,
        [
          Validators.email
        ]
      ),
      number: new FormControl(
        null,
        [
          Validators.required,
        ]
      ),
      address: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      nationalCode: new FormControl(
        null,
        [
          Validators.required
        ]
      )
    })
  }

  sendInfo(){
    const content = new Contact(
      this.signContact.controls['userName'].value,
      this.signContact.controls['password'].value,
      this.signContact.controls['repeatPass'].value,
      this.signContact.controls['email'].value,
      this.signContact.controls['number'].value,
      this.signContact.controls['address'].value,
      this.signContact.controls['nationalCode'].value,
    )
    this.situationService.postSignIn(content).subscribe(item => {
      if(item.status == 'Success'){
        this.rout.navigate([''])
        this.situationService.getAccount().subscribe(param => {this.situationService.account = param})
      } else{
        console.log('Error');
      }
    })
  }
}
