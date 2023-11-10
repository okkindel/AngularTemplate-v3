import {
  ChangeDetectionStrategy,
  AfterContentInit,
  ContentChild,
  HostBinding,
  Component,
  Input,
} from '@angular/core';
import { cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

import { RadioDirective } from './radio.directive';

const radioVariants = cva(
  'pointer-events-none absolute left-0 h-4 w-4 scale-50 opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed',
  {
    variants: {
      mode: {
        primary: 'fill-white stroke-white',
        secondary:
          'fill-primary-500 stroke-primary-500 peer-hover:fill-primary-600 peer-hover:stroke-primary-600 peer-focus:fill-primary-700',
      },
    },
    defaultVariants: {
      mode: 'primary',
    },
  },
);

@Component({
  selector: 'app-radio-wrapper',
  template: `
    <ng-content />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [ngClass]="svgClasses"
      role="graphics-symbol"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="8" cy="8" r="4" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioWrapperComponent implements AfterContentInit {
  @ContentChild(RadioDirective) private _radio?: RadioDirective;

  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public get classNames(): string {
    return combine('relative flex items-center', this.classes);
  }

  public get svgClasses(): string {
    return combine(radioVariants({ mode: this._radio?.mode }));
  }

  public ngAfterContentInit(): void {
    if (!this._radio) {
      throw new Error('RadioWrapperComponent must contain a RadioDirective');
    }
  }
}
