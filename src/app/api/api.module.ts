import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  HttpErrorInterceptor,
  LoaderInterceptor,
  TokenInterceptor,
} from './interceptors';
import { AuthRepository } from './auth/auth.repository';
import { UserRepository } from './user/user.repository';

const REPOSITORIES = [AuthRepository, UserRepository];

@NgModule({
  imports: [CommonModule],
  providers: [
    ...REPOSITORIES,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
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
