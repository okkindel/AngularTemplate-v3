import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from './models';
import { Observable } from 'rxjs';

@Injectable()
export class UsersRepository {
  constructor(private readonly _http: HttpClient) {}

  public getCurrentUserInfo(): Observable<UserResponse> {
    return this._http.get<UserResponse>(`${API_URL}/users/me`);
  }
}
