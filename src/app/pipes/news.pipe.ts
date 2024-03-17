import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'news'
})
export class NewsPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const [count] = args
    var text = value.trim().split(' ').slice(0, count).join(' ')
    return text;
  }

}
