import { NgModule } from '@angular/core';

import {
  CheckboxWrapperComponent,
  CheckboxLabelDirective,
  CheckboxDirective,
} from './checkbox';
import {
  RadioWrapperComponent,
  RadioLabelDirective,
  RadioDirective,
} from './radio';
import {
  InputWrapperComponent,
  InputLabelDirective,
  InputDirective,
} from './input';
import { TooltipComponent, TooltipDirective } from './tooltip';
import { ButtonDirective } from './button';
import { AnchorDirective } from './anchor';
import { DialogComponent } from './dialog';
import { CardComponent } from './card';
import { IconComponent } from './icon';

const ATOMS = [
  CheckboxWrapperComponent,
  CheckboxLabelDirective,
  InputWrapperComponent,
  RadioWrapperComponent,
  InputLabelDirective,
  RadioLabelDirective,
  CheckboxDirective,
  TooltipDirective,
  TooltipComponent,
  DialogComponent,
  ButtonDirective,
  AnchorDirective,
  InputDirective,
  RadioDirective,
  CardComponent,
  IconComponent,
];

@NgModule({ imports: ATOMS, exports: ATOMS })
export class AtomsModule {}
