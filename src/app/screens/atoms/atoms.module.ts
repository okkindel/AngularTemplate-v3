import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import {
  CheckboxComponent,
  TooltipComponent,
  AnchorComponent,
  ButtonComponent,
  DialogComponent,
  RadioComponent,
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
    RadioComponent,
    CardComponent,
  ],
  imports: [AtomsRoutingModule, SharedModule],
})
export class AtomsModule {}
