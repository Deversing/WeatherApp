import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { faPlus, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  icons: any = {
    add: faPlus,
    hide: faEyeSlash,
  }
  @Input() hideCountries: boolean = true
  countries: any = {};
  selectedCountry: string = '';
  weatherCountries: any[] = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCountries().subscribe((data:any) => {
      this.countries = data
    });

    let countries = localStorage.getItem('countries')?.toString() ?? '';
    this.weatherCountries = JSON.parse(countries);
  }

  addLocation() {
    this.weatherService.weatherCountry(this.selectedCountry).subscribe((data: any) => {
      this.weatherCountries.push(data);
      localStorage.setItem('countries', JSON.stringify(this.weatherCountries));
    })
  }

  update(e: any[]){
    this.weatherCountries = e;
  }
}
