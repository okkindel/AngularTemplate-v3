import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './views';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
