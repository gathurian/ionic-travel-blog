import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {iBlogComponent} from "../../assets/interfaces/iBlogComponent";
import {iBlog} from "../../assets/interfaces/iBlog";
import {MytravelblogsPage} from "../mytravelblogs/mytravelblogs";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {BlogComponentRepositoryProvider} from "../../providers/blogcomponent-repository/blogcomponent-repository";
import {EditblogPage} from "../editblog/editblog";

/**
 * Generated class for the EditblogcomponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editblogcomponent',
  templateUrl: 'editblogcomponent.html',
})
export class EditblogcomponentPage {

  blogComponent: iBlogComponent;
  blog: iBlog;
  modeText: String;
  mode: String

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private alertCtrl: AlertController,
              private blogRepository: BlogRepositoryProvider,
              private blogComponentRepository: BlogComponentRepositoryProvider,
              private toastCtrl: ToastController)
  {
    this.mode=navParams.get('mode');
    this.blog = navParams.get('blog');

    if(this.mode == "edit")
    {
      this.blogComponent=navParams.get('blogComponent');
      //console.log(this.blog);
      this.modeText= "Blogbereich bearbeiten";
    }else
    {
      this.blogComponent = <iBlogComponent>{};
      this.blog.previewImage='../assets/imgs/placeholder.png';

      this.blogComponent.layout=1;
      this.blogComponent.text="";
      this.blogComponent.image='../assets/imgs/placeholder.png';
      this.blogComponent.imageSubtitle="";

      this.blogComponent.name="";
      this.blogComponent.place="";
      this.blogComponent.country="";

      this.modeText= "Neuen Blogbereich erstellen";
      console.log(this.blogComponent);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditblogcomponentPage');
  }

  checkPlatform() {
    let alert = this.alertCtrl.create({
      title: 'Platform',
      message: 'You are running on: ' + this.plt.platforms(),
      buttons: ['OK']
    });
    alert.present();

    if (this.plt.is('cordova')) {
      // Do Cordova stuff
    } else {
      // Do stuff inside the regular browser
    }
  }

  save()
  {
    if(this.mode == "edit")
    {
      this.blogComponentRepository.updateBlogComponent(this.blogComponent);

      this.navCtrl.push(EditblogPage, {
        clickedBlog: this.blog,
        mode: "edit"
      });
      let toast = this.toastCtrl.create({
        message: 'BlogComponent wurde erfolgreich geändert',
        duration: 4000,
        position: 'bottom'
      });
      //toast.onDidDismiss(() => {
      //  console.log('Dismissed toast');
      //});
      toast.present();
    }
    else{
      this.blogComponentRepository.createBlogComponent(this.blogComponent)
        .then(key => {
          this.blogRepository.addComponentToBlog(this.blog, key);

          this.navCtrl.push(EditblogPage, {
            clickedBlog: this.blog,
            mode: "edit"
          });
          let toast = this.toastCtrl.create({
            message: 'Blogbereich wurde erfolgreich erstellt',
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
    this.navCtrl.push(EditblogPage, {
      clickedBlog: this.blog,
      mode: "edit"
    });
  }

  delete()
  {
    this.blogComponentRepository.deleteBlogComponent(this.blogComponent)
      .then(key => {
        this.blogRepository.removeComponentFromBlog(this.blog, key);

        this.navCtrl.push(EditblogPage, {
          clickedBlog: this.blog,
          mode: "edit"
        });



        let toast = this.toastCtrl.create({
          message: 'BlogComponent wurde erfolgreich gelöscht',
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
