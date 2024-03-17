import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, ContactIn } from 'src/app/class/claas';
import { Account } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  constructor(private http: HttpClient) { }

  signIn: boolean = true

  account: Account = {
    userName: 'Mohammad-sob',
    address: 'zanjan',
    email: 'mohammad@gmail.com',
    name: 'Mohammad',
    birthday: '12 january 2007',
    national: 'iranian'
  }

  postSignIn(content: Contact): Observable<any>{
    return this.http.post<any>('', content)
  }

  postSignUp(content: ContactIn): Observable<any>{
    return this.http.post<any>('', content)
  }

  getAccount(): Observable<Account>{
    return this.http.get<Account>('')
  }
}
