import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    RibbonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
