import { HasPermissionDirective, HasRoleDirective } from '@shared/directives';
import { LocalizedDatePipe, TruncatePipe } from '@shared/pipes';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderModule } from '@shared/global/loader';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '@shared/atoms';
import { ToastrModule } from 'ngx-toastr';

export const SHARED_MODULES = [
  TranslateModule,
  ToastrModule,
  CommonModule,
  LoaderModule,
  AtomsModule,
];

export const SHARED_DIRECTIVES = [HasPermissionDirective, HasRoleDirective];

export const SHARED_PIPES = [LocalizedDatePipe, TruncatePipe];
