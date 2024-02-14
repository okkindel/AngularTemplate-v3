import { LocalizationService, Language } from '@shared/global/i18n';
import { TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { UserService } from '@shared/services';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: { id: 'dashboard' },
})
export class DashboardComponent {
  private readonly _localizationService = inject(LocalizationService);
  private readonly _i18nService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public language: Language = this._i18nService.currentLang as Language;
  public showMenu: boolean = false;

  public get displayName(): string {
    return this._userService.user?.name || '';
  }

  public logout(): void {
    this._userService.logout();
  }

  public changeLanguage(lang: Language): void {
    this.language = lang;
    this._localizationService
      .useLanguage(lang, { withReload: false })
      .subscribe();
  }
}
