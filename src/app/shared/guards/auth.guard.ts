import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { catchError, Observable, map, of } from 'rxjs';
import { clearToken, getToken } from '@shared/utils';
import { Injectable, inject } from '@angular/core';
import { UserService } from '@shared/services';
import { UsersRepository } from '@api/users';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private readonly _userRepository = inject(UsersRepository);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);

  public canActivate(
    _activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    const token = getToken();

    // TODO: remove this line when the backend is ready
    return true;

    if (!token) {
      return this._router.createUrlTree(['/auth/login'], {
        queryParams: { redirectURL: state.url },
      });
    } else {
      return this._userRepository.getCurrentUserInfo().pipe(
        map((response) => {
          this._userService.user = response;

          return true;
        }),
        catchError((): Observable<boolean> => {
          this._router.navigate(['/auth/login']);
          clearToken();

          return of(false);
        }),
      );
    }
  }
}
