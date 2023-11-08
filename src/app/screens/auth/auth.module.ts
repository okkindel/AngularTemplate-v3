import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './views';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, CommonModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
