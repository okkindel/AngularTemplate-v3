import { HostBinding, Component, Input } from '@angular/core';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

@Component({
  selector: 'app-input-wrapper',
  standalone: true,
  template: `
    <ng-content />
  `,
})
export class InputWrapperComponent {
  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public get className(): string {
    return combine(`block relative my-6`, this.classes);
  }
}
