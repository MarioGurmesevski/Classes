import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../components/auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
