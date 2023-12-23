import { NgModule } from '@angular/core';

import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';

@NgModule({
  imports: [LoaderComponent],
  providers: [LoaderService],
  exports: [LoaderComponent],
})
export class LoaderModule {}
