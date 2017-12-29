import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trueOnly'
})
export class TrueOnlyPipe implements PipeTransform {

  transform(students: any, args?: any): any {
    return students.filter(student => student.pass);
  }

}
