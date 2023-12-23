import { HostBinding, ElementRef, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const radioVariants = cva(
  `peer h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-slate-500 bg-white transition-colors
    checked:border-primary-500 checked:hover:border-primary-600 focus:outline-none focus:ring-primary-600
    checked:focus:border-primary-700 focus-visible:outline-none disabled:cursor-not-allowed
    disabled:border-slate-100 disabled:bg-slate-50`,
  {
    variants: {
      mode: {
        primary: `checked:bg-primary-500 checked:hover:bg-primary-600 checked:focus:border-primary-700 checked:focus:bg-primary-700`,
        secondary: `checked:bg-primary-200 checked:hover:bg-primary-300 checked:focus:border-primary-700 checked:focus:bg-primary-400`,
      },
    },
    defaultVariants: {
      mode: 'primary',
    },
  },
);

export type RadioVariant = VariantProps<typeof radioVariants>;

@Directive({ selector: 'input[appRadio]', standalone: true })
export class RadioDirective {
  @Input() public mode: RadioVariant['mode'];

  @Input() public classes: ClassValue | ClassArray = [];

  constructor(private _elRef: ElementRef) {
    this._elRef.nativeElement.setAttribute('type', 'radio');
  }

  @HostBinding('class') public get classNames(): string {
    return combine(radioVariants(this), this.classes);
  }
}
