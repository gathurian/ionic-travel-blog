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
  selector: 'friend-detail',
  templateUrl: 'friend-detail.html'
})
export class FriendDetailPage {
  blogs: iBlog[];
  friends: Person[];
  selectedPerson: Person;
  placeholder:string = './assets/imgs/team-placeholder.jpg';

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private userRepository: UserRepositoryProvider,
              private blogRepository:BlogRepositoryProvider)
  {
    this.selectedPerson = navParams.get('person');
    this.blogs = [];
    this.friends = [];

    this.userRepository.getAllFriends(this.selectedPerson).then(friends => {
      console.log("------");
      console.log(friends);
      console.log("Person: " + this.selectedPerson);
      this.friends = friends;
    });

    this.blogRepository.getAllBlogsFrom(this.selectedPerson).then(blogs => {
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

