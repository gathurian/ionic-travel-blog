import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {iBlog} from "../../assets/interfaces/iBlog";
import {HttpClient} from "@angular/common/http";
import {ViewblogPage} from "../viewblog/viewblog";
import { PopoverController } from 'ionic-angular';
import { FilterpopoverforblogsPage } from '../filterpopoverforblogs/filterpopoverforblogs';
import {EditblogPage} from "../editblog/editblog";
import {Person} from "../../entities/person";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {iBlogComponent} from "../../assets/interfaces/iBlogComponent";
/**
 * Generated class for the MytravelblogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytravelblogs',
  templateUrl: 'mytravelblogs.html',
})
export class MytravelblogsPage
{
  blog: iBlog;
  blogs: Array<iBlog>;
  navigationSwitch: Boolean = true;
  author: Person;



  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public popoverCtrl: PopoverController,
              private userRepository: UserRepositoryProvider,
              private blogRepository: BlogRepositoryProvider,)
  {
    let array: Array<iBlog> = new Array<iBlog>();

    this.userRepository.getCurrentUser().then(person => {
      this.author = person;

      this.getBlogs();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytravelblogsPage');
  }

  private getBlogs() {
    this.blogRepository.getAllBlogsFrom(this.author).then(blogs => {
      this.blogs = blogs;
      console.log(this.author)
    });
  }

  navToViewBlog(event, blog) {
    if(this.navigationSwitch)
    {
      // That's right, we're pushing to ourselves!
      console.log("View Block");
      this.navCtrl.push(ViewblogPage, {
        clickedBlog: blog
      });
    }
    this.navigationSwitch=true;
  }
  navToEditBlog(event, blog) {
    console.log("Edit Blog");
    this.navigationSwitch=false;
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(EditblogPage, {
      clickedBlog: blog,
      mode: "edit"
    });
  }
  navToNewBlog(event, blog) {
    console.log("New Blog");
    this.navCtrl.push(EditblogPage, {
      mode: "create"
    });
  }

  presentFilterPopover() {
    let popover = this.popoverCtrl.create(FilterpopoverforblogsPage);
    popover.present();
  }

}
