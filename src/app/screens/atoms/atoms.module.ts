import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  CheckboxComponent,
  TooltipComponent,
  AnchorComponent,
  ButtonComponent,
  DialogComponent,
  RadioComponent,
  InputComponent,
  CardComponent,
} from './views';
import { AtomsRoutingModule } from './atoms-routing.module';

@NgModule({
  declarations: [
    CheckboxComponent,
    TooltipComponent,
    ButtonComponent,
    AnchorComponent,
    DialogComponent,
    InputComponent,
    RadioComponent,
    CardComponent,
  ],
  imports: [ReactiveFormsModule, AtomsRoutingModule, SharedModule],
})
export class AtomsModule {}
