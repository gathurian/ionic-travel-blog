import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {Blog} from "../../assets/classes/Blog";
import {Person} from "../../entities/person";

/**
 * Generated class for the EditblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editblog',
  templateUrl: 'editblog.html',
})
export class EditblogPage {
  blog: Blog;
  mode: String;
  author: Person;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth,
              private promptController: AlertController,
              private blogRepository: BlogRepositoryProvider,
              private userRepository: UserRepositoryProvider,)
  {
    this.userRepository.getCurrentUser().then(person => {
      this.author = person;
    });

    if(navParams.get('mode') == "edit")
    {
      this.blog = navParams.get('clickedBlog');
      console.log(this.blog);
      this.mode= "Blog bearbeiten";
    }else
    {
      this.blog = new Blog({});
      this.blog.previewImage='../assets/imgs/placeholder.png';
      this.blog.draftFlag=false;
      this.blog.publicFlag=true;
      this.blog.content=null;
      this.blog.visibleFor=null;

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!


      if(mm<10) {
        var mmm = "0" + mm.toString();
      }
      var yyyy = today.getFullYear();

      this.blog.date= yyyy+"-"+mmm+"-"+dd;

      this.mode= "Blog erstellen";
      console.log(this.blog);
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditblogPage');
  }

  save()
  {
    console.log(this.blog);
    this.blogRepository.createBlog(this.blog)
      .then(key => {
        this.userRepository.addNewBlog(this.author, key);
      });
  }


}
