import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipePow'
})
export class CustomPipePowPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    console.log(value)
    console.log(args)

    if(args.length == 0) 
      value = Math.pow(value, 2)

    else if(args.length == 1)
      value = Math.pow(value, args[0])

      else if(args.length == 2){
        value = Math.pow(value, args[0])
        value = value * ((args[1] / 100) + 1)
      }

    
    
    return value;
  }

}
