import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBqiNpcnOuvB-SeZ0k1k31j1HHtJAAUyDM',
      authDomain: 'ng-recipe-book-c4c1a.firebaseapp.com',
    });
  }

}
