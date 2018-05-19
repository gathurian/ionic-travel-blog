import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Person} from "../../entities/person";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {iBlog} from "../../assets/interfaces/iBlog";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {ViewblogPage} from "../viewblog/viewblog";

/**
 * Generated class for the FriendDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'myProfile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage {
  blogs: iBlog[];
  friends: Person[];
  me: Person;


  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private userRepository: UserRepositoryProvider,
              private blogRepository:BlogRepositoryProvider)
  {
    this.me = navParams.get('myself');
    this.blogs = [];
    this.friends = [];

    this.userRepository.getAllFriends(this.me).then(friends => {
      console.log("------");
      console.log(friends);
      console.log("Person: " + this.me);
      this.friends = friends;
    });

    this.blogRepository.getAllBlogsFrom(this.me).then(blogs => {
      console.log("-------------");
      console.log(blogs);
      this.blogs = blogs;
    });
  }

  showBlogs(blog:iBlog){
    this.navCtrl.push(ViewblogPage, {
      clickedBlog: blog
    });
  }

}

