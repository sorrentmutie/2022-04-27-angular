import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>
  {
    if(this.authService.token)
    {
      if(this.authService.userData?.roles.find(x => x === "admin"))
      {
        return of(true);
      }
      else
      {
        this.router.navigate(['/welcome']);
        return of(false);
      }
    }
    else
    {
      this.router.navigate(['/login']);
      return of(false);
    }
  }
  
}
