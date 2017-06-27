import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
        <header><header-app> </header-app></header>
        <side-app></side-app>
        <map-app class="map"></map-app> 
    </div>
  `
})
export class AppComponent  {
}