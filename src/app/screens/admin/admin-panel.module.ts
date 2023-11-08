import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminComponent } from './views';

@NgModule({
  declarations: [AdminComponent],
  imports: [AdminPanelRoutingModule, SharedModule],
})
export class AdminPanelModule {}
