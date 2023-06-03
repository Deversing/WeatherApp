import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekday'
})
export class WeekdayPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let date = new Date(value).toLocaleDateString('es', { weekday: 'long' });
    return date;
  }

}
