import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { clearToken } from '@shared/utils';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private _translateService: TranslateService,
    private _toastrService: ToastrService,
    private _router: Router,
  ) {}

  public intercept<T>(
    request: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        this._showErrorToast(response);
        if (response.status === 401) {
          this._router.navigate(['/auth/login']).then(() => {
            clearToken();
          });
        }

        return throwError(() => response);
      }),
    );
  }

  private _getErrorByStatusAndResult(response: HttpErrorResponse): string {
    switch (response.status) {
      case 401:
        return 'UNAUTHORIZED_ERROR';
      case 403:
        return 'FORBIDDEN_ERROR';
      default:
        return 'UNKNOWN_ERROR';
    }
  }

  private _showErrorToast(response: HttpErrorResponse): void {
    const optionalMessage = response.error?.message;
    const error = optionalMessage
      ? Array.isArray(optionalMessage)
        ? optionalMessage.join(', ')
        : optionalMessage
      : this._getErrorByStatusAndResult(response);
    this._toastrService.error(this._translateService.instant(`API_${error}`));
  }
}
