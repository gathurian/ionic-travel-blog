import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
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

  constructor(private navParams: NavParams) {
    this.blog = this.navParams.get('blog');
  }
}
