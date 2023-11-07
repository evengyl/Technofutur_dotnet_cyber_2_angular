import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcConverter'
})
export class BtcConverterPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {

    let taux = 0.000031

    if(args.length == 0){
      value = value * taux
    }
    else if(args.length == 1){
      value = value * args[0]
    }

    return value;
  }

}
