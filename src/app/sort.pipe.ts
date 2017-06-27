import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
 name: 'sort'
})
export class Sort implements PipeTransform{


 transform(array: Array<string>, args: string): Array<string> {

  if(!array || array === undefined || array.length === 0) return null;

    if(args === 'status') {
       array.sort((a: any, b: any) => {
        if ( a[args] > b[args] ){
          return -1;
        }else if( a[args] < b[args] ){
            return 1;
        }else{
          return 0; 
        }
      });        
    }
    else {
       array.sort((a: any, b: any) => {
        if ( a[args] < b[args] ){
          return -1;
        }else if( a[args] > b[args] ){
            return 1;
        }else{
          return 0; 
        }
      });     
    }


    return array;
  }

}