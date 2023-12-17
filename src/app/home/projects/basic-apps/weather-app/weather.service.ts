import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '93e37ed0ea3aefeea90b58754a473d20';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    const url = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
