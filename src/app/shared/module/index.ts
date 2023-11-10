import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import {
  CheckboxWrapperComponent,
  CheckboxLabelDirective,
  RadioWrapperComponent,
  RadioLabelDirective,
  CheckboxDirective,
  ButtonDirective,
  RadioDirective,
  CardComponent,
} from '../atoms';
import { HasPermissionDirective, HasRoleDirective } from '../directives';
import { LoaderComponent } from '../global/loader/loader.component';
import { LocalizedDatePipe, TruncatePipe } from '../pipes';

export const SHARED_ATOMS = [
  CheckboxWrapperComponent,
  CheckboxLabelDirective,
  CheckboxDirective,
  RadioWrapperComponent,
  RadioLabelDirective,
  RadioDirective,
  ButtonDirective,
  CardComponent,
];

export const SHARED_MODULES = [TranslateModule, ToastrModule, CommonModule];

export const SHARED_DIRECTIVES = [HasPermissionDirective, HasRoleDirective];

export const SHARED_PIPES = [LocalizedDatePipe, TruncatePipe];

export const SHARED_COMPONENTS = [LoaderComponent];
