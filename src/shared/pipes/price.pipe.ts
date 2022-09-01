import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    return value.toFixed(2);
  }
}
