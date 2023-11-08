import { NgModule } from '@angular/core';

import {
  SHARED_COMPONENTS,
  SHARED_DIRECTIVES,
  SHARED_MODULES,
  SHARED_ATOMS,
  SHARED_PIPES,
} from './module';

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_ATOMS,
    ...SHARED_PIPES,
  ],
  imports: [...SHARED_MODULES],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_MODULES,
    ...SHARED_ATOMS,
    ...SHARED_PIPES,
  ],
})
export class SharedModule {}
