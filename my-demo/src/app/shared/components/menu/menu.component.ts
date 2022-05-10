import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserData } from 'src/app/login/models/userdata';
import { AuthService } from 'src/app/login/services/auth.service';
import { LoginService } from 'src/app/login/services/login.service';
import { Customer } from 'src/app/subjects/customer';
import { Events } from '../../models/events';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  subscription: Subscription | undefined = undefined;
  lastCustomer : Customer | undefined = undefined;

  userDataObservable$: Observable<UserData | undefined> | undefined = undefined;

  constructor(private service: EventBusService, private authService: AuthService, private loginService: LoginService, private router: Router) {
    this.subscription = service.on(Events.CustomerAdded,
      (customer: Customer) => { this.lastCustomer = customer});

    this.userDataObservable$ = this.authService.userDataObservable$;
  }

  doLogout()
  {
    this.loginService.doLogout();
  }
  doLogin()
  {
    this.router.navigate(['/login']);
  }

}
