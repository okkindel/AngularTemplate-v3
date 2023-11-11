import { Injectable, Optional, SkipSelf } from '@angular/core';
import { catchError, Observable, NEVER, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { LocalizationServiceConfig } from './localization-config.service';
import { DEFAULT_LANGUAGE } from '../constants';
import { Language } from '../models';

@Injectable()
export class LocalizationService {
  private _localeId: Language = DEFAULT_LANGUAGE;

  constructor(
    @Optional() @SkipSelf() private readonly _singleton: LocalizationService,
    private readonly _translateService: TranslateService,
    private readonly _config: LocalizationServiceConfig,
  ) {
    if (this._singleton) {
      throw new Error('Service is already provided by the root module');
    }
    this._localeId = this._config.locale_id as Language;
  }

  public useLanguage(
    lang: Language,
    options?: {
      withReload?: boolean;
    },
  ): Observable<void> {
    this._translateService.setDefaultLang(lang);
    localStorage.setItem('language', lang);
    return this._translateService.use(lang).pipe(
      catchError(() => {
        localStorage.setItem('language', DEFAULT_LANGUAGE);
        location.reload();
        return NEVER;
      }),
      tap(() => {
        if (options?.withReload) {
          location.reload();
        }
      }),
    );
  }

  public initService(): Observable<void> {
    this._localeId = (localStorage.getItem('language') ||
      DEFAULT_LANGUAGE) as Language;
    return this.useLanguage(this._localeId);
  }
}
