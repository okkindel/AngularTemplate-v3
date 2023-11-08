import {
  InternationalizationModule,
  DEFAULT_LANGUAGE,
} from '@shared/global/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { ApiModule } from '@api/api.module';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

const FOR_ROOT_MODULES = [
  InternationalizationModule.forRoot({ locale_id: DEFAULT_LANGUAGE }),
  ToastrModule.forRoot(),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...FOR_ROOT_MODULES,

    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    ApiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
