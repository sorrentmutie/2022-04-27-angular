import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  constructor() { }

  // onKey(payload: KeyboardEvent){
  //   //console.log(payload.target.value);
  //   const myInput = payload.target as HTMLInputElement;
  //   console.log(myInput.value);
  // }

  onKey(value: string) {
    console.log(value);
  }

}
