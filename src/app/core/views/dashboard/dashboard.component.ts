import { LocalizationService, Language } from '@shared/global/i18n';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '@shared/services';
import { Component } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public language: Language = this._i18nService.currentLang as Language;
  public showMenu: boolean = false;

  constructor(
    private readonly _localizationService: LocalizationService,
    private readonly _i18nService: TranslateService,
    private readonly _userService: UserService,
  ) {}

  public get displayName(): string {
    return this._userService.user?.name || '';
  }

  public changeLanguage(lang: Language): void {
    this.language = lang;
    this._localizationService
      .useLanguage(lang, { withReload: false })
      .subscribe();
  }
}
