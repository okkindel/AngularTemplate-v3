import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

import { HasPermissionDirective, HasRoleDirective } from '../directives';
import { LoaderComponent } from '../global/loader/loader.component';
import { LocalizedDatePipe, TruncatePipe } from '../pipes';

export const SHARED_MODULES = [TranslateModule, ToastrModule];

export const SHARED_DIRECTIVES = [HasPermissionDirective, HasRoleDirective];

export const SHARED_PIPES = [LocalizedDatePipe, TruncatePipe];

export const SHARED_COMPONENTS = [LoaderComponent];
