import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { catchError, Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserRepository } from '../../api/user/user.repository';
import { clearToken, getToken } from '../utils';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _userService: UserService,
    private readonly _router: Router,
  ) {}

  public canActivate(
    _activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    const token = getToken();

    // FIXME: remove this line when the backend is ready
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
