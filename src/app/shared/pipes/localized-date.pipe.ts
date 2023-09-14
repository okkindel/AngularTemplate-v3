import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Optional } from '@shared/models';

@Pipe({
  name: 'localizedDate',
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private readonly _i18nService: TranslateService) {}

  public transform(value?: Date, format = 'mediumDate'): Optional<string> {
    const datePipe = new DatePipe(this._i18nService.currentLang);
    return datePipe.transform(value, format);
  }
}
