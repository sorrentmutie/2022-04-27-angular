import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, debounceTime, filter, forkJoin, interval, map, mergeAll, mergeMap, subscribeOn, switchMap, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToDo, User} from './welcone.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

    myInputElement : FormControl = new FormControl();

    constructor(private http: HttpClient) {
      const url = environment.placeholder;
      this.myInputElement.valueChanges
        .pipe(
          filter( x => x.length > 3 ),
          debounceTime(1000),
        //  map( x => this.http.get<User[]>(url + x)),
         // mergeAll()
         switchMap( x =>  this.http.get<User[]>(url + x))
        )
        .subscribe(dati => console.log(dati))
        // .subscribe(response => response.subscribe(dati => console.log(dati)));


        combineLatest([
          this.http.get<User[]>(url),
          this.http.get<ToDo[]>(environment.toDo),
          interval(5000).pipe(take(5)),
          this.myInputElement.valueChanges
        ])
        .subscribe( x => console.log(x));
    }
  }
