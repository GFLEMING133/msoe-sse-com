import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authencationService: AuthenticationService
  ) { }

  canActivate(): Observable<boolean> {
    return this.authencationService.user$
      .map(user => {
        if (user && user.uid) {
          console.log(user);
          return true;
        } else {
          this.router.navigate(['/signin']);
          return false;
        }
      });
  }
}
