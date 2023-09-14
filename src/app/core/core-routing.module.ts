import { DashboardComponent, NotFoundComponent } from './views';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, RoleGuard } from '@shared/guards';
import { NgModule } from '@angular/core';
import { Role } from '@shared/enums';

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
        path: 'admin',
        canActivate: [RoleGuard],
        data: {
          roles: [Role.ADMIN],
        },
        loadChildren: () =>
          import('../screens/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'page-not-found',
        component: NotFoundComponent,
      },
      {
        path: '**',
        redirectTo: '/page-not-found',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
