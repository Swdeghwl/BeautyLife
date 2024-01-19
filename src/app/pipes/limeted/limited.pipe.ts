import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limited'
})
export class LimitedPipe implements PipeTransform {
  transform(value: string, ...args: number[]): unknown {
    const [count]: number[] = args
    var text: string = value.trim().split(' ').slice(0, count).join(' ') + ' ...'
    return text;
  }

}
