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

import { CheckboxDirective } from './checkbox.directive';

const checkboxVariants = cva(
  'pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed',
  {
    variants: {
      mode: {
        primary: 'fill-white stroke-white',
        secondary:
          'fill-primary-500 stroke-primary-500 peer-hover:fill-primary-600 peer-hover:stroke-primary-600 peer-focus:fill-primary-700 peer-focus:stroke-primary-700',
      },
    },
    defaultVariants: {
      mode: 'primary',
    },
  },
);

@Component({
  selector: 'app-checkbox-wrapper',
  template: `
    <ng-content />
    <svg
      [ngClass]="svgClasses"
      xmlns="http://www.w3.org/2000/svg"
      role="graphics-symbol"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
      />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxWrapperComponent implements AfterContentInit {
  @ContentChild(CheckboxDirective) private _checkbox?: CheckboxDirective;

  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public get classNames(): string {
    return combine('relative flex h-6 flex-wrap items-center', this.classes);
  }

  public get svgClasses(): string {
    return combine(checkboxVariants({ mode: this._checkbox?.mode }));
  }

  public ngAfterContentInit(): void {
    if (!this._checkbox) {
      throw new Error('CheckboxComponent must contain a CheckboxDirective');
    }
  }
}
