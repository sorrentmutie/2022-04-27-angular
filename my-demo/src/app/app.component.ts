import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';

  constructor(private toastr: ToastrService){
    this.invocami(1);
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  invocami(callback: unknown) {
    if(typeof(callback) === 'function'){
      callback();
    }
  }

}
