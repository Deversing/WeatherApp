import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-forecast',
  templateUrl: './card-forecast.component.html',
  styleUrls: ['./card-forecast.component.css']
})
export class CardForecastComponent {

  @Input() forecast: any;

}
