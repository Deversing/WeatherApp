import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ParameterComponent } from './components/parameter/parameter.component';
import { CardForecastComponent } from './components/card-forecast/card-forecast.component';
import { WeekdayPipe } from './weekday.pipe';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { FormsModule } from '@angular/forms';
import { NotDecimalsPipe } from './not-decimals.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    ParameterComponent,
    CardForecastComponent,
    WeekdayPipe,
    CardCountryComponent,
    NotDecimalsPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
