import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '@shared/services';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard {
  constructor(private readonly _userService: UserService) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles = route.data['roles'];
    return this._userService.hasRole(requiredRoles);
  }
}
