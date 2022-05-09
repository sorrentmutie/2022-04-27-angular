import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Primo Interceptor');

    if(request.url.startsWith('https://randomuser.me/')) {
      const requestClonata = request.clone({
        headers : request.headers.set('Authorization', 'Bearer ' + this.tokenService.getToken())
      });

     //  console.log(request);
      return next.handle(requestClonata);
      // let x : HttpEvent<null>;
      // return of(x);
    } else {
      return next.handle(request);
    }






    // return next.handle(request).pipe(
    //   map((event: HttpEvent<unknown>) => {
    //     console.log('... event First Interceptor');
    //     console.log(event);
    //     return event;
    //   })
    // );
  }
}
