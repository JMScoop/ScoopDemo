import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RideProvider } from '../../providers/ride/ride';
import { Ride } from '../../models/ride';

/**
 * Generated class for the DrivingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driving',
  templateUrl: 'driving.html',
})
export class DrivingPage {

  private rides: Ride[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private rp: RideProvider) {
  }

  ionViewDidLoad() {
    this.rp.getRides({
      // EXAMPLE of what the query might look like...
      // query: {
      //   driver: {
      //     id: this.user._id
      //   }
      // }
    }).subscribe(
      (myRides: any) => {
        this.rides = myRides.data;
      }
    );
  }

}
