import { HostBinding, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const checkboxVariants = cva(
  `peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors
    checked:border-primary-500 checked:hover:border-primary-600 focus:outline-none focus:ring-primary-600
    checked:focus:border-primary-700 focus-visible:outline-none disabled:cursor-not-allowed
    disabled:border-slate-100 disabled:bg-slate-50`,
  {
    variants: {
      mode: {
        primary:
          'checked:bg-primary-500 checked:hover:bg-primary-600 checked:focus:bg-primary-700',
        secondary:
          'checked:bg-primary-200 checked:hover:bg-primary-300 checked:focus:bg-primary-400',
      },
    },
    defaultVariants: {
      mode: 'primary',
    },
  },
);

export type CheckboxVariant = VariantProps<typeof checkboxVariants>;

@Directive({ selector: 'input[appCheckbox]', standalone: true })
export class CheckboxDirective {
  @Input() public mode: CheckboxVariant['mode'];

  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('type') public type = 'checkbox';

  @HostBinding('class') public get classNames(): string {
    return combine(checkboxVariants(this), this.classes);
  }
}
