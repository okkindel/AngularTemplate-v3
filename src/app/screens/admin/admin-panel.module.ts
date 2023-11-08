import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminComponent } from './views';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminPanelRoutingModule, SharedModule],
})
export class AdminPanelModule {}
