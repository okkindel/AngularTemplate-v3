import { HostBinding, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const inputVariants = cva(
  `peer relative w-full border-slate-200  text-slate-500 transition-all placeholder:text-transparent
    autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary-500
    focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none
    disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`,
  {
    variants: {
      mode: {
        basic: `border-b outline-none`,
        outline: `rounded border`,
      },
      size: {
        base: `peer/base h-10 px-4 text-sm`,
        large: `peer/large h-12 px-4`,
      },
    },
    defaultVariants: {
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

  @Input() public mode: InputVariant['mode'];

  @Input() public size: InputVariant['size'];

  @HostBinding('class') public get classNames(): string {
    return combine(inputVariants(this), this.classes);
  }
}
