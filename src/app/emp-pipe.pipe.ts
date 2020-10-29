import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empPipe'
})
export class EmpPipePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if(gender.toLowerCase() == "male"){
      return "Mr." + name;
    }else {
      return "Mrs." + name;
    }
    return null;
  }

}
