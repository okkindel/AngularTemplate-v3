import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInfoResponse } from './models';

@Injectable()
export class UserRepository {
  constructor(private readonly _http: HttpClient) {}

  public getCurrentUserInfo(): Observable<UserInfoResponse> {
    return this._http.get<UserInfoResponse>(`${API_URL}/user/me`);
  }
}
