import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string, args: number = 0): string {
    let length = !args || args > value.length ? value.length : args;
    
    let replaceResult = value.slice(0, length);
    let replaceActual = value.slice(length, value.length);

    return [...replaceResult].reverse().join("") + replaceActual
  }
}
