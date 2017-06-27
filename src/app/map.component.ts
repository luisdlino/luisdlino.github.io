import { Component, OnInit } from '@angular/core';

import { DeviceService } from './device.service';
import { GetAdressService } from './getAdress.service'; 


@Component({
  selector: 'map-app',

  template: `
    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
      <sebm-google-map-marker *ngFor="let device of devices"[latitude]="device.lat" [longitude]="device.lon" [openInfoWindow]="true">
      

		<sebm-google-map-info-window [maxWidth]="200">
          <strong>Geladeira {{device.uid}}</strong>
          <p>{{device.endereco}}</p>
          <br>
          <strong>
	          <p>Temperatura: {{ device.temperatura }}</p>
	          <p>Abertura: {{ device.abertura }}</p>
	          <p>Status: {{ device.status}}</p>

          </strong>
        </sebm-google-map-info-window>


      </sebm-google-map-marker>
    </sebm-google-map>
     
  `
})

export class MapComponent implements OnInit{

	devices : any;
	devicePromise: Promise<any>;
	lat: number = -23.623407;
	lng: number = -46.698821;
	zoom: number = 14;

	constructor(private deviceService: DeviceService, private getAdressService: GetAdressService) {}	

	getDevice() {
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

		this.getDevice();

	}
}