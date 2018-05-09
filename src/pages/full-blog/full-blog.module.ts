import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullBlogPage } from './full-blog';

@NgModule({
  declarations: [
    FullBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(FullBlogPage),
  ],
})
export class FullBlogPageModule {}
