import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'seachFilter',
    
})

export class SearchFilter implements PipeTransform {

  teste = [];
  
  tmp = [];
  transform (array: any, args: string) {
    //if(!array || array === undefined || array.length === 0) {
      //return this.teste;

    //}
  	if(args ==='') return array;
    this.tmp.length = 0;
    var argsUpper = args.toUpperCase();
    let arr = array.filter((device:any)=>new RegExp(argsUpper).test(device.endereco.toUpperCase()));
    this.tmp.push(...arr);
    this.teste = this.tmp;
    return this.tmp;
  }
}






