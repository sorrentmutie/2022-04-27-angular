import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/login-request';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest = new LoginRequest("eve.holt@reqres.in", "cityslicka");

  constructor(private loginService: LoginService, private router: Router) { }

  goForIt(): void
  {
    console.log(this.loginRequest);
    this.loginService.doLogin(this.loginRequest)
    .subscribe(() => {
      this.router.navigate(['/welcome']);
    });
  }

}
