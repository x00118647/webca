import { Component } from '@angular/core';

@Component({
  selector: 'app-parta',
  templateUrl: './parta.component.html',
  styleUrls: ['./parta.component.css']
})
export class PartaComponent {

  constructor() {}

  celcius:number = 0;
  fahrenheit:number = 0;
  counter:number = 0;

  celciusToFahrenheit()
  {
    this.fahrenheit = (this.celcius * 9/5) + 32;
    this.counter++;
  }

  fahrenheitToCelcius()
  {
    this.celcius = (this.fahrenheit - 32) * 5/9;
    this.counter++;
  }

  convert()
  {
    if(this.celcius != null && this.fahrenheit != null)
    {
      this.celciusToFahrenheit();
    }
    else if (this.celcius != null && this.fahrenheit == null)
    {
      this.celciusToFahrenheit();
    }
    else{
      this.fahrenheitToCelcius();
    }
    this.counter++;
  }

  
}
