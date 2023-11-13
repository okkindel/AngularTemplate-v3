import { HostBinding, ElementRef, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const inputVariants = cva(
  `peer relative w-full border-slate-200 text-slate-500 transition-all placeholder:text-transparent autofill:bg-white
    focus:border-primary-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed
    disabled:bg-slate-50 disabled:text-slate-400`,
  {
    variants: {
      mode: {
        basic: `border-b outline-none`,
        outline: `rounded border`,
      },
      size: {
        base: `peer/base h-10 px-4 text-sm`,
        large: `peer/large h-12 px-4 text-base`,
      },
      error: {
        auto: `peer/error-auto [&.ng-invalid.ng-touched]:border-pink-500
          [&.ng-invalid.ng-touched]:text-pink-500 [&.ng-invalid.ng-touched]:focus:border-pink-500`,
        native: `peer/error-native invalid:border-pink-500 invalid:text-pink-500 invalid:focus:border-pink-500`,
        true: `peer/error-true border-pink-500 text-pink-500 focus:border-pink-500`,
      },
    },
    defaultVariants: {
      error: 'auto',
      mode: 'basic',
      size: 'base',
    },
  },
);

export type InputVariant = VariantProps<typeof inputVariants>;

@Directive({
  selector: 'input[appInput]',
  standalone: true,
})
export class InputDirective {
  @Input() public classes: ClassValue | ClassArray = [];

  @Input() public error: InputVariant['error'];

  @Input() public mode: InputVariant['mode'];

  @Input() public size: InputVariant['size'];

  constructor(private _elRef: ElementRef) {
    this._elRef.nativeElement.setAttribute('placeholder', '');
  }

  @HostBinding('class') public get classNames(): string {
    return combine(inputVariants(this), this.classes);
  }
}
