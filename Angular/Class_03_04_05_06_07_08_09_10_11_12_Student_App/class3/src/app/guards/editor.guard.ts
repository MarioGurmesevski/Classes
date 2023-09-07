import { AuthService } from './../components/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    return this.authService.userData$.pipe(
      take(1),
      map((user) => !!user?.roles?.['ediotr']),
      tap((isEditor) => !isEditor && this.router.navigate(['/dashboard']))
    );
  }
}
