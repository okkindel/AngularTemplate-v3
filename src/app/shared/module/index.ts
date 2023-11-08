import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '@shared/atoms/card';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { HasPermissionDirective, HasRoleDirective } from '../directives';
import { LoaderComponent } from '../global/loader/loader.component';
import { LocalizedDatePipe, TruncatePipe } from '../pipes';
import { ButtonDirective } from '../atoms';

export const SHARED_ATOMS = [ButtonDirective, CardComponent];

export const SHARED_MODULES = [TranslateModule, ToastrModule, CommonModule];

export const SHARED_DIRECTIVES = [HasPermissionDirective, HasRoleDirective];

export const SHARED_PIPES = [LocalizedDatePipe, TruncatePipe];

export const SHARED_COMPONENTS = [LoaderComponent];
