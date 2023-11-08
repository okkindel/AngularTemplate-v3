import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent, UserComponent } from './views';

@NgModule({
  declarations: [ProfileComponent, UserComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
