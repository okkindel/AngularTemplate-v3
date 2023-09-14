import {
  InternationalizationModule,
  DEFAULT_LANGUAGE,
} from '@shared/global/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ApiModule } from '@api/api.module';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    InternationalizationModule.forRoot({ locale_id: DEFAULT_LANGUAGE }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    ApiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
