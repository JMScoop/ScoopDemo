import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RideProvider } from '../../providers/ride/ride';
import { Ride } from '../../models/ride';
import { IneedaridePage } from '../ineedaride/ineedaride';

/**
 * Generated class for the SearchresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchresults',
  templateUrl: 'searchresults.html',
})
export class SearchresultsPage {

    public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
    }
  public rides: Ride[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public rp: RideProvider, public toastCtrl: ToastController) {
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'You have successfully joined the ride',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  stpSelect() {
      console.log('STP selected');
    }
  ionViewDidLoad() {
    this.rp.getRides({}).subscribe(
    	(r:Ride[]) => {
    		this.rides = r;
    	}
   	)
  }

}
