import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

import {
  SHARED_COMPONENTS,
  SHARED_DIRECTIVES,
  SHARED_MODULES,
  SHARED_PIPES,
} from './module';

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_DIRECTIVES, ...SHARED_PIPES],
  imports: [CommonModule, ToastrModule.forRoot(), ...SHARED_MODULES],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_MODULES,
    ...SHARED_PIPES,
  ],
})
export class SharedModule {}
