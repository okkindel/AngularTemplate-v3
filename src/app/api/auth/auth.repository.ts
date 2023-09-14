import {
  RegisterResponse,
  RegisterRequest,
  LoginResponse,
  LoginRequest,
} from './models';
import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthRepository {
  constructor(private readonly _http: HttpClient) {}

  public login(req: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${API_URL}/auth/login`, req);
  }

  public register(req: RegisterRequest): Observable<RegisterResponse> {
    return this._http.post<RegisterResponse>(`${API_URL}/auth/register`, req);
  }
}
