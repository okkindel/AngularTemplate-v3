import { DashboardRepository } from '@api/dashboard/dashboard.repository';
import { DashboardResponse } from '@api/dashboard/models';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const homeResolver: ResolveFn<DashboardResponse> = () => {
  return inject(DashboardRepository).getDashboard();
};
