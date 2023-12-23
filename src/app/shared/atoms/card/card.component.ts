import {
  ChangeDetectionStrategy,
  HostBinding,
  Component,
  Input,
} from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const cardVariants = cva(
  `overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200`,
  {
    variants: {
      mode: {
        default: `border border-transparent`,
        border: `border border-slate-200`,
      },
      padding: {
        none: `p-0`,
        small: `p-4`,
        base: `p-6`,
        large: `p-8`,
      },
    },
    defaultVariants: {
      mode: 'default',
      padding: 'base',
    },
  },
);

export type CardVariant = VariantProps<typeof cardVariants>;

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<ng-content />',
})
export class CardComponent {
  @Input() public padding: CardVariant['padding'];

  @Input() public mode: CardVariant['mode'];

  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public get classNames(): string {
    return combine(cardVariants(this), this.classes);
  }
}
