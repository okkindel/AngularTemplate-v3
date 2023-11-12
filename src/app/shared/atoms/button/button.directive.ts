import { booleanAttribute, HostBinding, Directive, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const buttonVariants = cva(
  `inline-flex cursor-pointer items-center justify-center justify-self-center whitespace-nowrap rounded
    text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none`,
  {
    variants: {
      mode: {
        primary: `bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-700`,
        secondary: `bg-primary-50 text-primary-500 hover:bg-primary-100 hover:text-primary-600 focus:bg-primary-200 focus:text-primary-700`,
        border: `border border-primary-500 text-primary-600 hover:border-primary-600 focus:border-primary-700 focus:text-primary-700`,
        link: `text-primary-700 hover:bg-primary-50 focus:bg-primary-100`,
      },
      size: {
        large: `h-12 gap-2 px-6`,
        base: `h-10 gap-2 px-5`,
        small: `h-8 gap-2 px-4 text-xs`,
      },
      rounded: {
        true: `rounded-full`,
      },
      icon: {
        true: `self-center`,
      },
      elevated: {
        true: `shadow-lg shadow-primary-100 hover:shadow-md focus:shadow-md`,
      },
      disabled: {
        true: `cursor-not-allowed text-primary-400 shadow-none`,
      },
    },
    defaultVariants: {
      mode: 'primary',
      size: 'base',
      disabled: false,
      elevated: false,
      rounded: false,
      icon: false,
    },
    compoundVariants: [
      { icon: true, size: `large`, class: `w-12` },
      { icon: true, size: `base`, class: `w-10` },
      { icon: true, size: `small`, class: `w-8` },
      {
        disabled: true,
        mode: 'primary',
        class: `border-primary-300 bg-primary-300`,
      },
      {
        disabled: true,
        mode: 'secondary',
        class: `border-primary-300 bg-primary-100`,
      },
      {
        disabled: true,
        mode: 'border',
        class: `border-primary-300`,
      },
      {
        disabled: true,
        mode: 'link',
        class: `text-primary-300 hover:bg-transparent`,
      },
    ],
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>;

@Directive({ selector: 'button[appButton], a[appButton]', standalone: true })
export class ButtonDirective {
  @Input({ transform: booleanAttribute })
  public elevated: ButtonVariant['elevated'];

  @Input({ transform: booleanAttribute })
  public disabled: ButtonVariant['disabled'];

  @Input({ transform: booleanAttribute })
  public rounded: ButtonVariant['rounded'];

  @Input({ transform: booleanAttribute })
  public icon: ButtonVariant['icon'];

  @Input() public classes: ClassValue | ClassArray = [];

  @Input() public mode: ButtonVariant['mode'];

  @Input() public size: ButtonVariant['size'];

  @HostBinding('class') public get classNames(): string {
    return combine(buttonVariants(this), this.classes);
  }
}
