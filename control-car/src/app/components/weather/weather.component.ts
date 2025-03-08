import { Component, OnInit } from '@angular/core';
import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/angular/standalone';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  standalone:true,
  imports: [IonContent,IonGrid,IonRow,IonCol,IonButton]
})
export class WeatherComponent {

  weatherConditions = ['Sunny', 'Rainy', 'Windy', 'Starshower'];
  backgroundClass = 'default-background';

  constructor() {}

  changeBackground(weather: string) {
    switch (weather) {
      case 'Sunny':
        this.backgroundClass = 'sunny-background';
        break;
      case 'Rainy':
        this.backgroundClass = 'rainy-background';
        break;
      case 'Windy':
        this.backgroundClass = 'windy-background';
        break;
      case 'Starshower':
        this.backgroundClass = 'starshower-background';
        break;
      default:
        this.backgroundClass = 'default-background';
    }
  }
}