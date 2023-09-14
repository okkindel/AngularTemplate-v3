import { Component, HostBinding, Input } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      mode: {
        default: 'bg-gray-500 text-white hover:bg-gray-600',
        error: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-yellow-200 bg-transparent text-yellow-500 hover:bg-gray-200/30',
        link: 'text-gray-950 underline-offset-4 hover:underline',
        secondary: 'bg-yellow-500 text-white hover:bg-yellow-600',
        ghost: 'hover:bg-gray-800/10 hover:text-gray-950',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      mode: 'default',
      size: 'default',
    },
  },
);

type ButtonVariant = VariantProps<typeof buttonVariants>;

@Component({ selector: 'button[prjButton]', template: '<ng-content/>' })
export class ButtonComponent {
  @Input() public variant: ButtonVariant['mode'];
  @Input() public size: ButtonVariant['size'];

  @HostBinding('class') public get classes(): string {
    return twMerge(buttonVariants(this));
  }
}
