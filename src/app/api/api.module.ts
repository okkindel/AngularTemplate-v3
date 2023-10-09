import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardRepository } from './dashboard/dashboard.repository';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UsersRepository } from './users/users.repository';
import { AuthRepository } from './auth/auth.repository';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const REPOSITORIES = [AuthRepository, UsersRepository, DashboardRepository];

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ...REPOSITORIES,

    {
      useClass: TokenInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },

    {
      useClass: HttpErrorInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
    {
      useClass: LoaderInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
  ],
})
export class ApiModule {}
