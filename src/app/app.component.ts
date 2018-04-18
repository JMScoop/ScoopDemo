import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { HomePage } from '../pages/home/home';
import { SearchresultsPage } from '../pages/searchresults/searchresults';
import { IneedaridePage } from '../pages/ineedaride/ineedaride';
import { ProfilePage } from '../pages/profile/profile';
import { MyCarpoolsPage } from '../pages/my-carpools/my-carpools';
import { PostARidePage } from '../pages/post-a-ride/post-a-ride';

@Component({
  templateUrl: 'app.html'
  //template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  private isAuthenticated: Boolean = false;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthServiceProvider,
    public events: Events
  ) {
    this.initializeApp();

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

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'I Need A Ride', component: IneedaridePage },
      { title: 'Search Results', component: SearchresultsPage },
      { title: 'Post A Ride', component: PostARidePage },
      { title: 'My Carpools', component: MyCarpoolsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
