import { User } from '@shared/models/entities/user.interface';
import { Injectable, inject } from '@angular/core';
import { Permission, Role } from '@shared/enums';
import { clearToken } from '@shared/utils';
import { Optional } from '@shared/models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;

  private readonly _router = inject(Router);

  public get user(): Optional<User> {
    return this._user || null;
  }

  public set user(data: Optional<User>) {
    this._user = data || undefined;
  }

  public logout(): void {
    this._router.navigate(['/auth/login']).then(() => {
      clearToken();
    });
  }

  public hasRole(roles: (keyof typeof Role)[] | Role[]): boolean {
    return !!this._user?.role && roles.includes(this._user.role);
  }

  public hasPermission(
    permissions: (keyof typeof Permission)[] | Permission[],
  ): boolean {
    return (
      !!this._user?.permissions &&
      this._user.permissions.some((el: Permission) => permissions.includes(el))
    );
  }
}
