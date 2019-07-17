import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'slugify'
})
export class Slugify implements PipeTransform {
  transform(value: string, pretext: string): string {
    return value.toLowerCase().replace(" ","-");
  }
}
