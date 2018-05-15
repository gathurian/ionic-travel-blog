import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditblogPage } from './editblog';

@NgModule({
  declarations: [
    EditblogPage,
  ],
  imports: [
    IonicPageModule.forChild(EditblogPage),
  ],
})
export class EditblogPageModule {}
