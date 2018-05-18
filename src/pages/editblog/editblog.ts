import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {iBlog} from "../../assets/interfaces/iBlog";
import {Person} from "../../entities/person";
import { ToastController } from 'ionic-angular';
import {MytravelblogsPage} from "../mytravelblogs/mytravelblogs";
import {EditblogcomponentPage} from "../editblogcomponent/editblogcomponent";
import {iBlogComponent} from "../../assets/interfaces/iBlogComponent";
import {BlogComponentRepositoryProvider} from "../../providers/blogcomponent-repository/blogcomponent-repository";

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
  blog: iBlog;
  blogComponents: Array<iBlogComponent>;
  modeText: String;
  mode: String
  author: Person;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth,
              private promptController: AlertController,
              private blogRepository: BlogRepositoryProvider,
              private userRepository: UserRepositoryProvider,
              private blogComponentRepository: BlogComponentRepositoryProvider,
              private toastCtrl: ToastController)
  {
    this.userRepository.getCurrentUser().then(person => {
      this.author = person;
    });
    this.mode=navParams.get('mode');
    if(this.mode == "edit")
    {
      this.blog = navParams.get('clickedBlog');
      console.log(this.blog);
      this.modeText= "Blog bearbeiten";
    }else
    {
      this.blog = <iBlog>{};
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

      this.modeText= "Blog erstellen";
      console.log(this.blog);
    }


    this.blogComponentRepository.getAllComponentsFrom(this.blog).then(blogComponents => {
      this.blogComponents = blogComponents;
      console.log(blogComponents);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditblogPage');

    //this.blogComponents = Array<iBlogComponent>();
  }

  save()
  {
    if(this.mode == "edit")
    {
      this.blogRepository.updateBlog(this.blog);

        this.navCtrl.push(MytravelblogsPage, {});
        let toast = this.toastCtrl.create({
          message: 'Blog wurde erfolgreich geändert',
          duration: 4000,
          position: 'bottom'
        });
        //toast.onDidDismiss(() => {
        //  console.log('Dismissed toast');
        //});
        toast.present();
    }
    else{
      this.blogRepository.createBlog(this.blog)
        .then(key => {
          this.userRepository.addNewBlog(this.author, key);

          this.navCtrl.push(MytravelblogsPage, {});
          let toast = this.toastCtrl.create({
            message: 'Blog wurde erfolgreich erstellt',
            duration: 4000,
            position: 'bottom'
          });
          //toast.onDidDismiss(() => {
          //  console.log('Dismissed toast');
          //});
          toast.present();
        });
    }

  }

  cancel()
  {
    this.navCtrl.push(MytravelblogsPage, {});
  }

  delete()
  {
    this.blogRepository.deleteBlog(this.blog)
      .then(key => {
        this.userRepository.removeBlogFromList(this.author, key);

        this.navCtrl.push(MytravelblogsPage, {});
        let toast = this.toastCtrl.create({
          message: 'Blog wurde erfolgreich gelöscht',
          duration: 4000,
          position: 'bottom'
        });
        //toast.onDidDismiss(() => {
        //  console.log('Dismissed toast');
        //});
        toast.present();
      });
  }

  createNewBlogComponent()
  {
    console.log("New Blog Component");
    this.navCtrl.push(EditblogcomponentPage, {
      blog: this.blog,
      mode: "create"
    });
  }
  editBlogComponent(event, blogComponent)
  {
    console.log("Edit Blog Component");
    this.navCtrl.push(EditblogcomponentPage, {
      blog: this.blog,
      mode: "edit",
      blogComponent: blogComponent
    });
  }




}
