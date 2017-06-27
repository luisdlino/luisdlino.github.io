import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
 name: 'filterCheck',
})


export class FilterCheck implements PipeTransform {

  public status: string;

  transform(array: any, args: string, checked: boolean): Array<string> {


    if(args ==='') return array;
    if(!array || array === undefined || array.length === 0) return null;

    return array.filter((array:any) => {

    	if (checked === true) {
  			if(array.status != args) {			  
  			    return false;  
  			}
    	}

        return array;

    });
  }
}