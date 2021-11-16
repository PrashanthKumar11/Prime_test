import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    let type = 'mS';
    let val = value;

    if (value < 1000) {
      type = 'mS';
      val = value;
    } else {
      val = value / 1000;
      type = 'S';
    }

    return this.formatTime(val, type);
  }

  formatTime(value: number, format: string) {
    return `${value.toFixed(2)} ${format}`;
  }
}
