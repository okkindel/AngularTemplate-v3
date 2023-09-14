import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeResolver } from './resolvers';
import { NgModule } from '@angular/core';
import { HomeComponent } from './views';

const routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { dashboard: homeResolver },
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
