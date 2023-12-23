import { API_URL } from '@environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginResponse, LoginRequest } from './models';

@Injectable()
export class AuthRepository {
  private readonly _http = inject(HttpClient);

  public login(request: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${API_URL}/auth/login`, request);
  }
}
