import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  public inputValue: any = '';
  public cityName: any;
  public temp: any = '';
  public description: any = '';
  public icon: any = '';
  public humidity: any = '';
  public windSpeed: any = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.updateWeather('pune');
  }

  updateWeather(cityName: any) {
    this.cityName = cityName;
    this.weatherService.getWeather(this.cityName).subscribe(
      (data) => {
        this.cityName = data.name;
        this.icon = data.weather[0].icon;
        this.description = data.weather[0].description;
        this.temp = data.main.temp;
        this.humidity = data.main.humidity;
        this.windSpeed = data.wind.speed;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
