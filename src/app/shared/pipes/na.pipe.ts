import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'  
})
export class NaPipe implements PipeTransform {

  transform(value: unknown,otherString?: string): unknown {
    console.log('NA Called')
    if(value !== '' && value !== null && value !== undefined) {
      return value;
    } else {
      debugger;
      if(otherString == undefined) {
        return "--";
      } else {
        return otherString;
      }
    }
    
  }

}
