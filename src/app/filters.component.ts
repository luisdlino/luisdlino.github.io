import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filters-app',
  templateUrl: './filters.component.html',

})


export class FiltersComponent {


  someRangeTmp: any = [-20, 20];
  someRangeAbt: any = [100, 300];
  textSearch: string = '';


  @Output() checkRadio: EventEmitter<string> = new EventEmitter<string>();
  

   @Output() clean : EventEmitter<string> = new EventEmitter<string>();

   @Output() keyu : EventEmitter<string> = new EventEmitter<string>();

   @Output() sliderVal : EventEmitter<any> = new EventEmitter<any>();
  


  emittChecked(val) {
    this.checkRadio.emit(val);
  }

  Clean() {
  	this.clean.emit();
  }

  onKey() {
  	this.keyu.emit(this.textSearch);
  }

  sliderFunc(val) {
    var t = [];
    t[0] = val;

    if (val ==='temperatura') {
        t[1] = this.someRangeTmp[0];
        t[2] = this.someRangeTmp[1];
            this.sliderVal.emit(t);
    }
    else if (val ==='abertura') {
        t[1] = this.someRangeAbt[0];
        t[2] = this.someRangeAbt[1];
            this.sliderVal.emit(t);
    }
  }
}