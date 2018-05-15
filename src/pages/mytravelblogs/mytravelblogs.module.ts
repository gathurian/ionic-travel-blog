import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytravelblogsPage } from './mytravelblogs';

@NgModule({
  declarations: [
    MytravelblogsPage,
  ],
  imports: [
    IonicPageModule.forChild(MytravelblogsPage),
  ],
})
export class MytravelblogsPageModule {}
