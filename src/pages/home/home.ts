import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';
import { SearchresultsPage } from '../searchresults/searchresults';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isAuthenticated: boolean = false;

  constructor(
    public navCtrl: NavController,
    public auth: AuthServiceProvider,
    public events: Events
  ) {
    this.auth.isAuthenticated().then(
      (isAuth: boolean) => {
        this.isAuthenticated = isAuth;
      }
    );
    this.events.subscribe('user:logged_in', () => {
      this.isAuthenticated = true;
    });
    this.events.subscribe('user:logged_out', () => {
      this.isAuthenticated = false;
    });
  }

  onLoadSearchResults() {
  	this.navCtrl.push(SearchresultsPage);
  }

}
