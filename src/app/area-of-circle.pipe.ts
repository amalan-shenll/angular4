import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaOfCircle'
})
export class AreaOfCirclePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * value * Math.PI;
  }

}
