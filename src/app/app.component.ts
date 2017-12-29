import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDJAbSD4ld-nLPJyuLvv0p6MMC3vABqaq4",
      authDomain: "angularrecipebook-bef78.firebaseapp.com"
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature=feature;
  }
}
