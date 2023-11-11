import { HostBinding, Directive, Input } from '@angular/core';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

@Directive({ selector: 'label[appCheckboxLabel]', standalone: true })
export class CheckboxLabelDirective {
  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public get classNames(): string {
    return combine(
      'cursor-pointer select-none pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400',
      this.classes,
    );
  }
}
