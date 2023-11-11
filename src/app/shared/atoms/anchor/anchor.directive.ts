import { Directive } from '@angular/core';

import { ButtonDirective } from '../button';

@Directive({
  selector: 'a[appAnchor]',
  hostDirectives: [
    {
      directive: ButtonDirective,
      inputs: [
        'elevated',
        'disabled',
        'classes',
        'rounded',
        'mode',
        'size',
        'icon',
      ],
    },
  ],
  standalone: true,
})
export class AnchorDirective {}
