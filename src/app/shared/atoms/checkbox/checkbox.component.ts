import { Component, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  public ngControl = inject(NgControl, { optional: true });
}
