import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  public transform(
    value: string,
    limit: number,
    trail: string = '...',
  ): string {
    return value
      ? value.length > limit
        ? value.substring(0, limit) + trail
        : value
      : '';
  }
}
