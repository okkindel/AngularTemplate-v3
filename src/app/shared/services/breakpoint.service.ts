import { Injectable, HostListener } from '@angular/core';
import { Breakpoint } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  public currentBreakpoint: Breakpoint;

  private readonly _breakpointsArr: Breakpoint[] = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
  ];

  constructor() {
    this.currentBreakpoint = this._getCurrentBreakpoint(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.currentBreakpoint = this._getCurrentBreakpoint(window.innerWidth);
  }

  public isSmallerThan(breakpoint: Breakpoint): boolean {
    return (
      this._breakpointsArr.indexOf(this.currentBreakpoint) <=
      this._breakpointsArr.indexOf(breakpoint)
    );
  }

  public isGreaterThan(breakpoint: Breakpoint): boolean {
    return (
      this._breakpointsArr.indexOf(this.currentBreakpoint) >=
      this._breakpointsArr.indexOf(breakpoint)
    );
  }

  private _getCurrentBreakpoint(windowWidth: number): Breakpoint {
    if (windowWidth >= 1536) {
      return '2xl';
    } else if (windowWidth >= 1280) {
      return 'xl';
    } else if (windowWidth >= 1024) {
      return 'lg';
    } else if (windowWidth >= 768) {
      return 'md';
    } else if (windowWidth >= 640) {
      return 'sm';
    } else {
      return 'xs';
    }
  }
}
