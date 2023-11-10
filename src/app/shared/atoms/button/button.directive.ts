import { booleanAttribute, HostBinding, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center justify-self-center whitespace-nowrap rounded text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-primary-400 disabled:shadow-none',
  {
    variants: {
      mode: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-700 disabled:border-primary-300 disabled:bg-primary-300',
        secondary:
          'bg-primary-50 text-primary-500 hover:bg-primary-100 hover:text-primary-600 focus:bg-primary-200 focus:text-primary-700 disabled:border-primary-300 disabled:bg-primary-100',
        border:
          'border border-primary-500 text-primary-600 hover:border-primary-600 focus:border-primary-700 focus:text-primary-700 disabled:border-primary-300',
        link: 'text-primary-700 hover:bg-primary-50 focus:bg-primary-100 disabled:text-primary-300 disabled:hover:bg-transparent',
      },
      size: {
        large: 'h-12 gap-2 px-6',
        base: 'h-10 gap-2 px-5',
        small: 'h-8 gap-2 px-4 text-xs',
      },
      rounded: {
        true: 'rounded-full',
      },
      icon: {
        true: 'self-center',
      },
      elevated: {
        true: 'shadow-lg shadow-primary-100 hover:shadow-md focus:shadow-md',
      },
    },
    defaultVariants: {
      mode: 'primary',
      size: 'base',
      elevated: false,
      rounded: false,
      icon: false,
    },
    compoundVariants: [
      { icon: true, size: 'large', class: 'w-12' },
      { icon: true, size: 'base', class: 'w-10' },
      { icon: true, size: 'small', class: 'w-8' },
    ],
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>;

@Directive({ selector: 'button[appButton]' })
export class ButtonDirective {
  @Input() public classes: ClassValue | ClassArray = [];

  @Input({ transform: booleanAttribute })
  public elevated: ButtonVariant['elevated'];

  @Input({ transform: booleanAttribute }) public icon: ButtonVariant['icon'];

  @Input() public mode: ButtonVariant['mode'];

  @Input({ transform: booleanAttribute })
  public rounded: ButtonVariant['rounded'];

  @Input() public size: ButtonVariant['size'];

  @HostBinding('class') public get classNames(): string {
    return combine(buttonVariants(this), this.classes);
  }
}
