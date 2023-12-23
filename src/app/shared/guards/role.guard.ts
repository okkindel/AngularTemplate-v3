import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { UserService } from '@shared/services';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard {
  private readonly _userService = inject(UserService);

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles = route.data['roles'];
    return this._userService.hasRole(requiredRoles);
  }
}
