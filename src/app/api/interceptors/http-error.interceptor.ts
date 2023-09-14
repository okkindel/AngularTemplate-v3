import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
// import { NotifierService } from 'angular-notifier';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { clearToken } from '@shared/utils';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly _i18nService: TranslateService,
    private readonly _toastrService: ToastrService,
    private readonly _router: Router,
  ) {}

  public intercept<T>(
    request: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        this._showErrorToast(response);
        if (response.status === 401) {
          this._router.navigate(['/auth/login']);
          clearToken();
        }
        return throwError(() => response);
      }),
    );
  }

  private _showErrorToast(response: HttpErrorResponse): void {
    const optionalMessage = response.error.message;
    const error = response.error.message
      ? Array.isArray(optionalMessage)
        ? optionalMessage.join(', ')
        : optionalMessage
      : this._getErrorByStatusAndResult(response);
    this._toastrService.error(this._i18nService.instant(`API_${error}`));
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
}
