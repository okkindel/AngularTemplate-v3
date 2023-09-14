import { HasRoleDirective, VarDirective } from '@shared/directives';
import { LocalizedDatePipe, TruncatePipe } from '@shared/pipes';
import { LoaderComponent } from '@shared/global/loader';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '@shared/components';

export const SHARED_DIRECTIVES = [HasRoleDirective, VarDirective];

export const SHARED_PIPES = [TruncatePipe, LocalizedDatePipe];

export const SHARED_COMPONENTS = [LoaderComponent, ButtonComponent];

export const SHARED_MODULES = [TranslateModule];
