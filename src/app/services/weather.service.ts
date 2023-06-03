import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  currentWeather(location: [number, number]) {
    // let lon = location[0].toFixed(2);
    // let lat = location[1].toFixed(2);
    // console.log(lat, lon)
    let query = (typeof location != 'object') ? `q=${location}` : `lat=${location[1]}&lon=${location[0]}`;
    console.log(query);
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=55289c7127af7c894706a564bb404755&lang=sp`);
  }

  weatherCountry(countrie: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${countrie}&units=metric&appid=55289c7127af7c894706a564bb404755&lang=sp`);
  }

  forecast() {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=Tecamac,MX&cnt=23&units=metric&appid=55289c7127af7c894706a564bb404755');
  }

  getCountries() {
    return this.http.get('https://www.universal-tutorial.com/api/countries', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJlbWlsaW8uYW5kZXJlLmxAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiY2VmcklQQVozRUxWcVNkUzA0WDI1VDJPczFtdjVhT3Bxd2ZiSElEejhySjYxUldPUTg4eDFFcnJyZ1JyQUxReTZrbyJ9LCJleHAiOjE2ODU4Mzc4MjR9.3fa9CFXHf6iGqO7IgUhTcDHHxkIbsk8qklZlemI7XW8'
      }
    });
  }
}

