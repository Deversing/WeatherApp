import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location: number[] = [] ;

  constructor() { }

  async getLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        // console.log(coords)
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        console.error(err);
        reject();
      });
    });
  }
}
