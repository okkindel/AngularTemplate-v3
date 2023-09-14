import { Optional, User } from '@shared/models';
import { Injectable } from '@angular/core';
import { clearToken } from '@shared/utils';
import { Router } from '@angular/router';
import { Role } from '@shared/enums';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly _router: Router) {}

  private _user?: User;

  public set user(data: Optional<User>) {
    this._user = data || undefined;
  }

  public get user(): Optional<User> {
    return this._user || null;
  }

  public hasRole(roles: Role[] | `${Role}`[]): boolean {
    return !!this._user?.role && roles.includes(this._user.role);
  }

  public logout(): void {
    this._router.navigate(['/auth/login']);
    clearToken();
  }
}
