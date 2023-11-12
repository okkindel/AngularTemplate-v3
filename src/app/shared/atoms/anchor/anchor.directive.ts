import { Directive } from '@angular/core';

import { ButtonDirective } from '../button';

// TODO: Another type of directive should be created for the anchor element.

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
