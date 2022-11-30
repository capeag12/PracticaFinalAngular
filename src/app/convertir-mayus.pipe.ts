import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirMayus'
})
export class ConvertirMayusPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
