import {
  ModuleWithProviders,
  APP_INITIALIZER,
  LOCALE_ID,
  NgModule,
} from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { registerLocaleData, CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import LOCALE_EN from '@angular/common/locales/en';
import LOCALE_PL from '@angular/common/locales/pl';
import { Observable } from 'rxjs';

import { LocalizationServiceConfig, LocalizationService } from './services';
import { I18nConfig } from './models';

registerLocaleData(LOCALE_PL, 'pl');
registerLocaleData(LOCALE_EN, 'en');

export function TranslateFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        useFactory: TranslateFactory,
        provide: TranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class InternationalizationModule {
  public static forRoot(
    config: I18nConfig,
  ): ModuleWithProviders<InternationalizationModule> {
    return {
      ngModule: InternationalizationModule,
      providers: [
        {
          useFactory: initLocalizationService,
          deps: [LocalizationService],
          provide: APP_INITIALIZER,
          multi: true,
        },
        { provide: LocalizationServiceConfig, useValue: config },
        { provide: LOCALE_ID, useValue: config.locale_id },
        LocalizationService,
      ],
    };
  }
}

export function initLocalizationService(
  service: LocalizationService,
): () => Observable<void> {
  return (): Observable<void> => service.initService();
}
