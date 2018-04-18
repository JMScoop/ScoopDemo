import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostARidePage } from '../post-a-ride/post-a-ride'

@IonicPage()
@Component({
  selector: 'page-my-carpools',
  templateUrl: 'my-carpools.html'
})
export class MyCarpoolsPage {

  drivingRoot = 'DrivingPage'
  ridingRoot = 'RidingPage'
  postaridepage = PostARidePage;


  constructor(public navCtrl: NavController) {}

  goToPostARidePage() {
  	//push another page onto the history stack
  	//causing the nav controller to animate the new page
  	this.navCtrl.push('PostARidePage');
  }

}
