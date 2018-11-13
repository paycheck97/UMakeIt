import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyAdwL-ter_d_iHgRGPmd16vTgTk-GH_CLE",
  authDomain: "project-prod-c8b20.firebaseapp.com",
  databaseURL: "https://project-prod-c8b20.firebaseio.com",
  projectId: "project-prod-c8b20",
  storageBucket: "project-prod-c8b20.appspot.com",
  messagingSenderId: "229475320079"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  
  ngOnInit(){
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
