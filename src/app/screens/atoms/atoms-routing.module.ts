import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'button',
    pathMatch: 'full',
  },
  {
    path: 'anchor',
    component: AnchorComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'dialog',
    component: DialogComponent,
  },
  {
    path: 'radio',
    component: RadioComponent,
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtomsRoutingModule {}
