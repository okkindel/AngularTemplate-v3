import { ButtonDirective, InputDirective } from '@shared/components';
import { HasRoleDirective, VarDirective } from '@shared/directives';
import { LocalizedDatePipe, TruncatePipe } from '@shared/pipes';
import { LoaderComponent } from '@shared/global/loader';
import { TranslateModule } from '@ngx-translate/core';

export const SHARED_DIRECTIVES = [
  HasRoleDirective,
  ButtonDirective,
  InputDirective,
  VarDirective,
];

export const SHARED_PIPES = [TruncatePipe, LocalizedDatePipe];

export const SHARED_COMPONENTS = [LoaderComponent];

export const SHARED_MODULES = [TranslateModule];
