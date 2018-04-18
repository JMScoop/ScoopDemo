import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	private user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.user = {
  		user_metadata: {
			given_name: "Hannah",
  			family_name: "Walsh",
  			car: {
  				description: "Blue Toyota Camry",
  				seats: 4
  			}
  		},
  		picture: "../assets/icon/profile-pic.ico",
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
