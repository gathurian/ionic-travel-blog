import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Blog} from "../../assets/classes/Blog";
import {BlogComponent} from "../../assets/classes/BlogComponent";

/**
 * Generated class for the ViewblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewblog',
  templateUrl: 'viewblog.html',
})
export class ViewblogPage {
  blog: Blog;
  blogComponents: Array<BlogComponent>;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.blog = navParams.get('clickedBlog');
    console.log(this.blog);

    //HTTP Request auf this.blog.content <Array String>
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewblogPage');
  }

}
