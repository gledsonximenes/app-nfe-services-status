import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'formatDateTime'
})
export class FormatDateTimePipe implements PipeTransform {

  transform(date: Date): string {
    if(date == null){
      date = new Date();
    }
    return moment(date).format("DD-MM-YYYY HH:mm");
  }

}
