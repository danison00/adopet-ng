import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskAge'
})
export class MaskAgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(parseInt(value) < 0) return 0;
    if(parseInt(value) > 20) return 20;

    return value;
  }

}
