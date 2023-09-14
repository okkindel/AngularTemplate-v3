import { SHARED_COMPONENTS, SHARED_DIRECTIVES, SHARED_PIPES } from './module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [...SHARED_DIRECTIVES, ...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [TranslateModule, CommonModule],
  exports: [
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    TranslateModule,
  ],
})
export class SharedModule {}
