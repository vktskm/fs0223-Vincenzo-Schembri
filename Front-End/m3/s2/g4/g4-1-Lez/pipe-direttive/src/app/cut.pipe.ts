import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  //value è il valore di partenza del pipe
  //args sarà un array contenente eventuali opzioni
  transform(value: string, ...args: unknown[]): string {
    return value.substring(0, 10) + '...';
  }

}
