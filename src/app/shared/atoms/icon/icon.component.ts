import {
  ChangeDetectionStrategy,
  HostBinding,
  Component,
  Input,
} from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { LucideAngularModule } from 'lucide-angular';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';
import { Icon } from '@shared/models';

const iconVariants = cva(``, {
  variants: {
    mode: {
      default: ``,
    },
  },
  defaultVariants: {
    mode: 'default',
  },
});

export type IconVariant = VariantProps<typeof iconVariants>;

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  standalone: true,
  template: `
    <lucide-angular
      [strokeWidth]="strokeWidth"
      [class]="classNames"
      [name]="name"
      [size]="size"
    />
  `,
})
export class IconComponent {
  @Input() public mode: IconVariant['mode'];

  @Input({ required: true }) public name!: Icon;

  @Input() public size?: string | number;

  @Input() public strokeWidth?: string | number;

  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public hostClass = 'p-icon-wrapper';

  public get classNames(): undefined | string {
    return combine(iconVariants(this), this.classes);
  }
}
