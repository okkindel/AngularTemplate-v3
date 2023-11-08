import { BREAKPOINT } from '@shared/constants';
import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

type ScreenWidth = (typeof BREAKPOINT)[keyof typeof BREAKPOINT];

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private _currentBreakpoint: ScreenWidth;

  public resizeSubject$ = new Subject<ScreenWidth>();

  constructor() {
    this._currentBreakpoint = this._getCurrentBreakpoint();
    // TODO: this is unsubscribed. Check later if we can somehow unsubscribe it.
    fromEvent(window, 'resize').subscribe(() => this._getCurrentBreakpoint());
  }

  public get currentBreakpoint(): ScreenWidth {
    return this._currentBreakpoint;
  }

  private _getCurrentBreakpoint(): ScreenWidth {
    const oldBreakpoint = this._currentBreakpoint;

    const newBreakpoint: ScreenWidth = Object.values(BREAKPOINT)
      .filter((breakpoint) => {
        return window.innerWidth >= breakpoint;
      })
      .slice(-1)[0];

    if (oldBreakpoint !== newBreakpoint) {
      this._currentBreakpoint = newBreakpoint;
      this.resizeSubject$.next(this._currentBreakpoint);
    }
    return this._currentBreakpoint;
  }
}
