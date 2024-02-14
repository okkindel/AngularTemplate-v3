import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';
import { Icon } from '@shared/models';

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
  // https://lucide.dev/icons/
  @Input({ required: true }) public name!: Icon;

  @Input() public size?: string | number;

  @Input() public strokeWidth?: string | number;

  @Input() public classes: ClassValue | ClassArray = [];

  public get classNames(): undefined | string {
    return combine(this.classes);
  }
}
