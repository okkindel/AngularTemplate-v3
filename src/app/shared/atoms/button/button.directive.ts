import { booleanAttribute, HostBinding, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { cn } from '@shared/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center justify-self-center whitespace-nowrap rounded text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primary-300 disabled:text-primary-400 disabled:shadow-none',
  {
    variants: {
      mode: {
        default:
          'bg-primary-50 text-primary-500 hover:bg-primary-100 hover:text-primary-600 focus:bg-primary-200 focus:text-primary-700 disabled:bg-primary-100',
        rounded:
          'rounded-full bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-700 disabled:bg-primary-300',
        border:
          'border border-primary-500 text-primary-600 hover:border-primary-600 focus:border-primary-700 focus:text-primary-700',
        link: 'text-primary-700 hover:bg-primary-50 focus:bg-primary-100 disabled:text-primary-300 disabled:hover:bg-transparent',
      },
      size: {
        large: 'h-12 gap-2 px-6',
        base: 'h-10 gap-2 px-5',
        small: 'h-8 gap-2 px-4 text-xs',
      },
      icon: {
        true: 'self-center',
      },
      elevated: {
        true: 'shadow-lg shadow-primary-100 hover:shadow-md focus:shadow-md',
      },
    },
    defaultVariants: {
      mode: 'default',
      size: 'base',
      icon: false,
    },
    compoundVariants: [
      {
        icon: true,
        size: 'large',
        class: 'w-12',
      },
      {
        icon: true,
        size: 'base',
        class: 'w-10',
      },
      {
        icon: true,
        size: 'small',
        class: 'w-8',
      },
    ],
  },
);

type Variant = VariantProps<typeof buttonVariants>;

@Directive({ selector: '[appButton]' })
export class ButtonDirective {
  @Input() public classes: ClassValue | ClassArray = [];

  @Input({ transform: booleanAttribute }) public elevated: Variant['elevated'];

  @Input({ transform: booleanAttribute }) public icon: Variant['icon'];

  @Input() public mode: Variant['mode'];

  @Input() public size: Variant['size'];

  @HostBinding('class') public get classNames(): string {
    return cn(buttonVariants(this), this.classes);
  }
}
