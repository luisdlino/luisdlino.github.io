import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

import { DeviceService } from './device.service';
import { GetAdressService } from './getAdress.service'; 
import { FiltersComponent }  from './filters.component';
import {Sort} from "./sort.pipe";
import {FilterCheck} from "./filterCheck.pipe";
import {SearchFilter} from "./searchFilter.pipe";
import {SliderFilter} from "./sliderFilter.pipe";


@Component({
  selector: 'side-app',
  templateUrl: './side.component.html',
})



export class SideComponent implements OnInit {

  devices : any;
  adress: any;
  selection: 'id';
  options: any;
  devicePromise: Promise<any>;
  valueStatus: any = '';
  checkedStatus: boolean = true;
  searchValue: string = '';
  sliderMinValue: string = '';
  sliderMaxValue: string = '';
  sliderMoved: string ='';


  constructor(private deviceService: DeviceService, private getAdressService: GetAdressService) {

    this.options = [{desc: 'Temperatura', value: 'temperatura'}, {desc: 'Consumo', value: 'consumo'}, {desc: 'Status', value: 'status'}];
	}



	getAllDevices() {
	    this.deviceService.getDevice().then(value => {
	        //SUCCESS
	        this.devices = value.devices;
			this.devices.forEach((item,index)=>{
				var lat = item.lat.toString();
				var lon = item.lon.toString();

		    	this.getAdressService.getAdress(lat, lon).then( value => {
	        		//Success

	        		item.endereco = value.results[0].formatted_address
	        	},
	        	(error) => {
			        //FAILURE
			        console.log(error);
			    })
			})

	    }, (error) => {
	        //FAILURE
	        console.log(error);
	    })
	} 	



	ngOnInit() {
		this.getAllDevices();
	}

	checkFilter(val) {

		this.valueStatus = val;
		this.checkedStatus = true;  
  	}

	Clean(){

  		this.valueStatus = '';
  		this.sliderMinValue ='';
  		var sliders = (<HTMLScriptElement[]><any>document.getElementsByClassName('subHeaderModal'));
 		sliders[0].style.display = 'none';
 		sliders[1].style.display = 'none';
		var ele = <any>document.getElementsByName('inlineRadioOptions');
		
	    for(var i=0;i<ele.length;i++)
		      ele[i].checked = false;
	}

	seachKey(event) {

		this.searchValue = event;

	}

	sliderInput(val) {
	    this.sliderMoved = val[0];
	    this.sliderMinValue = val[1];
	    this.sliderMaxValue = val[2];
	}


}