import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xLength',
})
export class XLengthPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 80) {
      return value.substring(0, 80) + '...';
    }
    return value;
  }
}
