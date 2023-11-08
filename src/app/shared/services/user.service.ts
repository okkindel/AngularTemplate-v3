import { User } from '@shared/models/entities/user.interface';
import { Injectable } from '@angular/core';
import { clearToken } from '@shared/utils';
import { Router } from '@angular/router';

import { Permission, Role } from '../enums';
import { Optional } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;

  constructor(private readonly _router: Router) {}

  public get user(): Optional<User> {
    return this._user || null;
  }

  public set user(data: Optional<User>) {
    this._user = data || undefined;
  }

  public hasPermission(
    permissions: (keyof typeof Permission)[] | Permission[],
  ): boolean {
    return (
      !!this._user?.permissions &&
      this._user.permissions.some((el: Permission) => permissions.includes(el))
    );
  }

  public hasRole(roles: (keyof typeof Role)[] | Role[]): boolean {
    return !!this._user?.role && roles.includes(this._user.role);
  }

  public logout(): void {
    this._router.navigate(['/auth/login']).then(() => {
      clearToken();
    });
  }
}
