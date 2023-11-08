import { Injectable } from '@angular/core';
import { Theme } from '@shared/enums';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    this.theme === Theme.DARK ? this.setDarkMode() : this.setLightMode();
  }

  public get theme(): Theme {
    return localStorage['theme'] === Theme.DARK ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? Theme.DARK
      : Theme.LIGHT;
  }

  public setDarkMode(): void {
    document.documentElement.classList.add(Theme.DARK);
    document.documentElement.dataset['theme'] = Theme.DARK;
    localStorage['theme'] = Theme.DARK;
  }

  public setLightMode(): void {
    document.documentElement.classList.remove(Theme.DARK);
    document.documentElement.dataset['theme'] = Theme.LIGHT;
    localStorage['theme'] = Theme.LIGHT;
  }
}
