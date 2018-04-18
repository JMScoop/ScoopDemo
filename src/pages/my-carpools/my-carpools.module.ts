import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCarpoolsPage } from './my-carpools';
import { PostARidePage } from '../post-a-ride/post-a-ride'

@NgModule({
  declarations: [
    MyCarpoolsPage,
    PostARidePage,
  ],
  imports: [
    IonicPageModule.forChild(MyCarpoolsPage),
  ]
})
export class MyCarpoolsPageModule {}
