import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserData } from '../models/userdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string | undefined = undefined;
  private _userData: UserData | undefined = undefined;

  userDataObservable$: Observable<UserData | undefined> | undefined = undefined;
  private userDataSubject: Subject<UserData | undefined> | undefined = undefined;

  constructor() {
    this.userDataSubject = new Subject();
    this.userDataObservable$ = this.userDataSubject.asObservable();
  }

  set token(value: string | undefined) {
    this._token = value;
    if(this._token)
    {
      this.parseToken(this._token);
    }
    else
    {
      this._userData = undefined;
      this.userDataSubject?.next(undefined);
    }
  }
  get token(): string | undefined {
    return this._token;
  }
  get userData(): UserData | undefined {
    return this._userData;
  }

  parseToken(token: string)
  {
    this._userData = {
      id: "1",
      name: "Ivano",
      lastname: "D.",
      picture: "https://cdn.menzzo.it/media/catalog/product/h/m/hm1651220125_gibus-2p_rouge__mz_w700_h700.jpg",
      roles: ['inserviente','muratore','programmatore', 'admin']
    }
    this.userDataSubject?.next(this._userData);
  }
}
