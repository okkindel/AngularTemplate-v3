import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, RoleGuard } from '@shared/guards';
import { NgModule } from '@angular/core';
import { Role } from '@shared/enums';

import { DashboardComponent, NotFoundComponent } from './views';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../screens/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'atoms',
        loadChildren: () =>
          import('../screens/atoms/atoms.module').then((m) => m.AtomsModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../screens/admin/admin-panel.module').then(
            (m) => m.AdminPanelModule,
          ),
        canActivate: [RoleGuard],
        data: {
          roles: [Role.ADMIN],
        },
      },
      {
        redirectTo: '/page-not-found',
        path: '**',
      },
    ],
  },
  {
    component: NotFoundComponent,
    path: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class CoreRoutingModule {}
