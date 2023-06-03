import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notDecimals'
})
export class NotDecimalsPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return Math.trunc(value);
  }

}
