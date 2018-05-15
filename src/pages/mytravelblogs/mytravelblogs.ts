import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Blog} from "../../assets/classes/Blog";
import {HttpClient} from "@angular/common/http";
import {ViewblogPage} from "../viewblog/viewblog";
import { PopoverController } from 'ionic-angular';
import { FilterpopoverforblogsPage } from '../filterpopoverforblogs/filterpopoverforblogs';
import {EditblogPage} from "../editblog/editblog";
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
  blog: Blog;
  blogs: Array<Blog>;
  navigationSwitch: Boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public popoverCtrl: PopoverController)
  {
    let array: Array<Blog> = new Array<Blog>();

    let blogJSON =this.httpClient.get('./assets/testJSONs/Blog1.json');
    blogJSON.subscribe(data =>
    {
      console.log(data);
      this.blog = <Blog>data;
      array.push(this.blog);
    });

    blogJSON =this.httpClient.get('./assets/testJSONs/Blog2.json');
    blogJSON.subscribe(data =>
    {
      console.log(data);
      this.blog = <Blog>data;
      array.push(this.blog);
    });

    this.blogs=array;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytravelblogsPage');
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
