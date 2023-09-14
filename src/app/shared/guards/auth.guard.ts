import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UsersRepository } from '@api/users/users.repository';
import { clearToken, getToken } from '@shared/utils';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '@shared/services';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private readonly _usersRepo: UsersRepository,
    private readonly _userService: UserService,
    private readonly _router: Router,
  ) {}

  public canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    const token = getToken();
    if (!token) {
      this._redirectToLogin(state);
      return false;
    } else {
      return this._usersRepo.getCurrentUserInfo().pipe(
        map((response) => {
          this._userService.user = response;
          return true;
        }),
        catchError((): Observable<boolean> => {
          this._redirectToLogin(state);
          clearToken();
          return of(false);
        }),
      );
    }
  }

  private _redirectToLogin(state: RouterStateSnapshot): void {
    this._router.navigate(['/auth/login'], {
      queryParams: { redirectURL: state.url },
    });
  }
}
