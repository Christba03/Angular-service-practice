import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BackgroundComponent } from "../components/background/background.component";
import { CarComponent } from '../components/car/car.component';
import { WeatherComponent } from "../components/weather/weather.component";
import { RoadComponent } from "../components/road/road.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, BackgroundComponent, CarComponent, WeatherComponent, RoadComponent],
})
export class HomePage {
  constructor() {}
}
