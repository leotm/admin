import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'toAsterisk'})
export class ToAsteriskPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/./g, "*");
  }
}
