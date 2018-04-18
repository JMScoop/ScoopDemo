import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ride } from '../../models/ride';
import { RideProvider } from '../../providers/ride/ride';
import { SearchresultsPage } from '../searchresults/searchresults';


/**
 * Generated class for the IneedaridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ineedaride',
  templateUrl: 'ineedaride.html',
})
export class IneedaridePage {
	 comingFrom: string;
	 goingTo: string;

   searchresults = SearchresultsPage; 



   rides: Ride[];

	 public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
    }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rideProvider: RideProvider
  ) {
    rideProvider.getRides({}).subscribe(
      (result:Ride[]) => {
        this.rides = result;
      }
    );
  }


  stpSelect() {
    console.log('STP selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IneedaridePage');
  }

}
