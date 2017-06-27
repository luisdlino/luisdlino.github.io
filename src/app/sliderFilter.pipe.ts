import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'sliderFilter',
    
})

export class SliderFilter implements PipeTransform {

  public abertura: string;
  public temperatura: string;

  transform(array: any, arg1: string, arg2: string, type: string): Array<string> {

    if(arg1 ===''){
      return array;
    }

  	if(type ==='temperatura'){
	    return array.filter((array:any) => {
  			if(array.temperatura < arg1 || array.temperatura > arg2) {			  
  			    return false;  
  			}
	        
        return array;
	    });
  	}
  	else if (type ==='abertura'){
		
	    return array.filter((array:any) => {

  			if(array.abertura < arg1 || array.abertura > arg2) {			  
  			    return false;  
  			}
	        return array;

	    });
  	}

  }
}