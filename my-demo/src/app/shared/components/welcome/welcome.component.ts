import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, map, catchError, of, throwError, Observable, debounceTime, delay, retry } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {


  srcArray = from([1,2,3, 'A',4]);
  myInput: FormControl = new FormControl('');
  input$: Observable<string> | undefined = undefined;

  constructor() {

     this.input$ = this.myInput.valueChanges;

     this.input$
      .pipe(
        debounceTime(2000),
        delay(1000),
        retry(3))
      .subscribe( valore => console.log(valore));


     const myObservable = this.srcArray.pipe(
       map( valore => {
        let risultato = (valore as number) * 2;
        if(Number.isNaN(risultato)) {
          console.log("Errore di calcolo");
          return of(-1);
       //   throw new Error("Il risultato è NaN");

        }
        return risultato;
       }),
      //  catchError(errore => {
      //    console.log('Sono in catch Error');
      //    // return of(-1);
      //    //return throwError(() => new Error('test'))
      //  })
     );

     myObservable.subscribe(
       valore => console.log("Valore ricevuto: " + valore),
       errore => console.log("Errore nel subscriber: " + errore),
       () => console.log("Processamento completo")
     );


   }
  // onKey(payload: KeyboardEvent){
  //   //console.log(payload.target.value);
  //   const myInput = payload.target as HTMLInputElement;
  //   console.log(myInput.value);
  // }

  // onKey(value: string) {
  //   console.log(value);
  // }
}
