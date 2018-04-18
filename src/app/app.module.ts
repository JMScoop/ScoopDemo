import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchresultsPage } from '../pages/searchresults/searchresults';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RideProvider } from '../providers/ride/ride';

import { IneedaridePage } from '../pages/ineedaride/ineedaride';
import { ProfilePage } from '../pages/profile/profile';
import { MyCarpoolsPage } from '../pages/my-carpools/my-carpools';
import { PostARidePage } from '../pages/post-a-ride/post-a-ride';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { FeathersProvider } from '../providers/feathers/feathers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchresultsPage,
    IneedaridePage,
    ProfilePage,
    MyCarpoolsPage,
    PostARidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchresultsPage,
    IneedaridePage,
    ProfilePage,
    MyCarpoolsPage,
    PostARidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FeathersProvider,
    RideProvider
  ]
})
export class AppModule {}
