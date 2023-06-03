import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent {

  @Input() weatherCountry: any = {}
  @Output() updateCountries = new EventEmitter();
  iconDelete = faTrash

  trashCountry() {
    let data = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('countries'))));
    let newData = data.filter((item: any) => item.name != this.weatherCountry.name);
    localStorage.setItem('countries', JSON.stringify(newData));
    this.updateCountries.emit(newData);
  }
}
