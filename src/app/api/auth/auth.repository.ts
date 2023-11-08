import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginResponse, LoginRequest } from './models';

@Injectable()
export class AuthRepository {
  constructor(private readonly _http: HttpClient) {}

  public login(request: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${API_URL}/auth/login`, request);
  }
}
