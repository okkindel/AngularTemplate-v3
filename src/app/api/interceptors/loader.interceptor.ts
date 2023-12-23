import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { LoaderService } from '@shared/global/loader';
import { Injectable, inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private readonly _loaderService = inject(LoaderService);

  public intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    const spinnerSubscription: Subscription =
      this._loaderService.spinner$.subscribe();
    return next
      .handle(req)
      .pipe(finalize(() => spinnerSubscription.unsubscribe()));
  }
}
