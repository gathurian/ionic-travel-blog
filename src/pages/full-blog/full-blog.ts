import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Blog} from "../../entities/blog";

/**
 * Generated class for the FullBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-full-blog',
  templateUrl: 'full-blog.html',
})
export class FullBlogPage {
  blog: Blog;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.blog = navParams.get('blog');
    console.log(this.blog);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullBlogPage');
  }

}
