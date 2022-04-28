import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';

  constructor(){
    this.invocami(1);
  }

  invocami(callback: unknown) {
    if(typeof(callback) === 'function'){
      callback();
    }
  }

}
