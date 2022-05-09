import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Secondo Interceptor');
    return next.handle(request).pipe(
      map((event: HttpEvent<unknown>) => {
         if(event instanceof HttpResponse) {
          console.log('... event Secondo Interceptor');
          console.log(event);

         }
        return event;
      }),
      catchError((errore: HttpErrorResponse) => {
        console.log(errore);
      //  return of({ status: errore.status, message: errore.error.reason });
       return throwError( () => {
         console.log('Errore nella chiamata');
         return { status: errore.status, message: errore.error }
      });
      })
    );
  }
}
