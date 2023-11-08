import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProfileComponent, UserComponent } from './views';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
