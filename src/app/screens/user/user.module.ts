import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent, UserComponent } from './views';

@NgModule({
  declarations: [ProfileComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
