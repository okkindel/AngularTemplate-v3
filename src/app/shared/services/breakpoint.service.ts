import {
  distinctUntilChanged,
  BehaviorSubject,
  shareReplay,
  fromEvent,
  startWith,
  map,
} from 'rxjs';
import { BREAKPOINT } from '@shared/constants';
import { ScreenWidth } from '@shared/models';
import { Breakpoint } from '@shared/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  public readonly size$ = new BehaviorSubject<ScreenWidth>(
    this._getCurrentBreakpoint(),
  );

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        startWith(null),
        map(() => this._getCurrentBreakpoint()),
        distinctUntilChanged(),
        shareReplay(1),
      )
      .subscribe((size: ScreenWidth) => {
        this.size$.next(size);
      });
  }

  public isSmallerThan(breakpoint: Breakpoint): boolean {
    return this.size$.value < BREAKPOINT[breakpoint];
  }

  public isGreaterThan(breakpoint: Breakpoint): boolean {
    return this.size$.value > BREAKPOINT[breakpoint];
  }

  private _getCurrentBreakpoint(): ScreenWidth {
    const width: number = window.innerWidth;
    const breakpoints: ScreenWidth[] = Object.values(BREAKPOINT);
    return (
      breakpoints.find((bp: ScreenWidth) => width <= bp) || BREAKPOINT['2xl']
    );
  }
}
