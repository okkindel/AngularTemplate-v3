import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  HttpErrorInterceptor,
  LoaderInterceptor,
  TokenInterceptor,
} from './interceptors';
import { UsersRepository } from './users/users.repository';
import { AuthRepository } from './auth/auth.repository';

const REPOSITORIES = [AuthRepository, UsersRepository];

@NgModule({
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
