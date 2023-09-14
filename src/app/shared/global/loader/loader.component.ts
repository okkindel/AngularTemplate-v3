import { LoaderService } from './loader.service';
import { Observable, debounceTime } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'prj-loader',
  template: `
    <div>loading</div>
    <!-- <p-blockUI [blocked]="!!(overlayBlocked$ | async)" />
    <p-progressSpinner
      *ngIf="overlayBlocked$ | async"
      class="fixed top-50 left-50"
      strokeWidth="3"
    /> -->
  `,
  styles: [
    `
      :host {
        ::ng-deep p-blockui {
          position: absolute;
          z-index: 9999;
        }

        /* p-progressSpinner {
          transform: translate(-50%, -50%);
          z-index: 10000;
        } */
      }
    `,
  ],
})
export class LoaderComponent {
  constructor(private readonly loaderService: LoaderService) {}

  public overlayBlocked$: Observable<boolean> =
    this.loaderService.overlayBlocked$.pipe(debounceTime(50));
}
