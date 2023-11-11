import { BehaviorSubject, defer, NEVER } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public readonly spinner$ = defer(() => {
    this.overlayBlocked$.next(true);
    return NEVER.pipe(
      finalize(() => {
        this.overlayBlocked$.next(false);
      }),
    );
  }).pipe(share());

  public readonly overlayBlocked$ = new BehaviorSubject<boolean>(false);
}
