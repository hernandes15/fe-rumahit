import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentPipe'
})
export class PercentPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value != '') {
      let val = parseFloat(value);

      let val2 = Number.isNaN(val) ? 0 : val;

      let val3 = val2 > 100 ? 100 : val2;

      return val3 + '%'
    }

    return 0 + '%';

  }

}
