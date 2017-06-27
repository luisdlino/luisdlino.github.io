import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AgmCoreModule} from 'angular2-google-maps/core';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header.component';
import { SideComponent }  from './side.component';
import { FiltersComponent }  from './filters.component';
import { MapComponent }  from './map.component';
import { DeviceService } from './device.service';
import { FindDevice } from './findDevice.service';
import { GetAdressService } from './getAdress.service';
import {Sort} from "./sort.pipe";
import {FilterCheck} from "./filterCheck.pipe";
import {SearchFilter} from "./searchFilter.pipe";
import {SliderFilter} from "./sliderFilter.pipe";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsyWbDcxegz5_AXHukaTSIdAc2b4eWsww'
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    SideComponent,
    FiltersComponent,
    Sort,
    FilterCheck,
    SearchFilter,
    SliderFilter
  ],

  providers: [ DeviceService, GetAdressService, FindDevice ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
