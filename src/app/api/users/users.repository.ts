import { API_URL } from '@environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserInfoResponse } from './models';

@Injectable()
export class UsersRepository {
  private readonly _http = inject(HttpClient);

  public getCurrentUserInfo(): Observable<UserInfoResponse> {
    return this._http.get<UserInfoResponse>(`${API_URL}/user/me`);
  }
}
