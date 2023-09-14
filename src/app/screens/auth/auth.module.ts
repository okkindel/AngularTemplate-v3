import {
  RegisterComponent,
  LoginComponent,
} from './views';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  RegisterComponent,
  LoginComponent,
];

@NgModule({
  imports: [ReactiveFormsModule, AuthRoutingModule, SharedModule, CommonModule],
  declarations: [...COMPONENTS],
})
export class AuthModule {}
