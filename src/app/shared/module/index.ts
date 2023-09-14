import { LoaderComponent } from '@shared/global/loader';

import { HasRoleDirective, VarDirective } from '@shared/directives';

import { LocalizedDatePipe, TruncatePipe } from '@shared/pipes';

export const SHARED_DIRECTIVES = [HasRoleDirective, VarDirective];

export const SHARED_PIPES = [TruncatePipe, LocalizedDatePipe];

export const SHARED_COMPONENTS = [LoaderComponent];
