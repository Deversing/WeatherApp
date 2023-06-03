import { Component, Input } from '@angular/core';
import { Parameter } from 'src/app/core/Weather';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent {

  @Input() parameter: Parameter = {
    value: 0,
    unit: '',
    title: '',
    icon: ''
  };

}
