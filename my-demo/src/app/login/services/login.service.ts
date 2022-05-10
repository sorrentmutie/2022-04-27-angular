import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authService: AuthService)
  { }

  doLogin(loginData: LoginRequest): Observable<LoginResponse>
  {
    return this.httpClient.post<LoginResponse>(environment.loginServer, loginData).pipe(tap(
      (response) => this.authService.token = response.token
    ));
  }

  doLogout()
  {
    this.authService.token = undefined;
  }
}
