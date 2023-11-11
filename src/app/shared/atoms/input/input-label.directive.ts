import { HostBinding, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const inputLabelVariants = cva(
  `absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-autofill:-top-2 peer-required:after:ml-1 peer-required:after:text-pink-500 peer-required:after:content-['*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent`,
  {
    variants: {
      size: {
        base: 'peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm',
        large: 'peer-placeholder-shown:top-3 peer-placeholder-shown:text-base',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  },
);

export type InputLabelVariant = VariantProps<typeof inputLabelVariants>;

@Directive({ selector: 'label[appInputLabel]', standalone: true })
export class InputLabelDirective {
  @Input() public classes: ClassValue | ClassArray = [];

  @Input() public size: InputLabelVariant['size'];

  @HostBinding('class') public get classNames(): string {
    return combine(inputLabelVariants(this), this.classes);
  }
}
