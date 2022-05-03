import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private service: EventBusService) {
    this.subscription = service.on(Events.CustomerAdded,
      (customer: Customer) => { this.lastCustomer = customer});
  }

}
