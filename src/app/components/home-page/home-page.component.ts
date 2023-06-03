import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faDroplet, faWind, faLocationDot, faPlus, faCloud, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  icons: any = {
    location: faLocationDot,
    hide: faEyeSlash,
    show: faEye,
    refresh: faArrowRotateRight,
  }

  forecast: any[] = [];
  locations: boolean = true;
  dateNow = new Date().toLocaleDateString('es-es', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  weather?: any = {};
  refreshing: boolean = false;

  constructor(private weatherService: WeatherService, private locationService: LocationService) { }

  ngOnInit(): void {
    this.currentWeather();
    this.weatherService.forecast().subscribe((data: any) => {
      let last = '';
      this.forecast = data.list.filter((item: any) => {
        let current = new Date(item.dt_txt).toLocaleDateString('es', { weekday: 'long' });
        if(current != last){
          last = current;
          return true;
        }
        return false;
      });
    })
  }

  currentWeather(refresh: boolean = false) {
    (refresh) ? this.refreshing = true : this.refreshing = false;
    this.locationService.getLocation().then(data => {
      this.weatherService.currentWeather(data).subscribe((data: any) => {
        this.weather = {
          icon: data.weather[0].icon,
          temp: data.main.temp,
          description: data.weather[0].description,
          location: data.name,
          humidity: {
            value: data.main.humidity,
            unit: '%',
            title: 'Humidity',
            icon: faDroplet
          },
          speedAir: {
            value: data.wind.speed,
            unit: 'm/s',
            title: 'Speed Air',
            icon: faWind
          },
          clouds: {
            value: data.clouds.all,
            unit: '%',
            title: 'Clouds',
            icon: faCloud
          }
        };
      })
    })
    setTimeout(() => {
      this.refreshing = false;
    }, 3000);
  }

  showLocations() {
    this.locations = !this.locations;
  }
}
