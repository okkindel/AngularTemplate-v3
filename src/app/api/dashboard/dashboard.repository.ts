import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { DashboardResponse } from './models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardRepository {
  constructor(private readonly _http: HttpClient) {}

  public getDashboard(): Observable<DashboardResponse> {
    return this._http.get<DashboardResponse>(`${API_URL}/dashboard`);
  }
}
