import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { HasPermissionDirective, HasRoleDirective } from '../directives';
import { LoaderComponent } from '../global/loader/loader.component';
import { LocalizedDatePipe, TruncatePipe } from '../pipes';
import { AtomsModule } from '../atoms';

export const SHARED_MODULES = [
  TranslateModule,
  ToastrModule,
  CommonModule,
  AtomsModule,
];

export const SHARED_DIRECTIVES = [HasPermissionDirective, HasRoleDirective];

export const SHARED_PIPES = [LocalizedDatePipe, TruncatePipe];

export const SHARED_COMPONENTS = [LoaderComponent];
