import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {iBlogComponent} from "../../assets/interfaces/iBlogComponent";
import {iBlog} from "../../assets/interfaces/iBlog";
import {MytravelblogsPage} from "../mytravelblogs/mytravelblogs";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {BlogComponentRepositoryProvider} from "../../providers/blogcomponent-repository/blogcomponent-repository";
import {EditblogPage} from "../editblog/editblog";
import {Camera} from "@ionic-native/camera";

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
  mode: String;
  placeholderimage: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private alertCtrl: AlertController,
              private blogRepository: BlogRepositoryProvider,
              private blogComponentRepository: BlogComponentRepositoryProvider,
              private toastCtrl: ToastController,
              private camera: Camera)
  {
    this.placeholderimage="./assets/imgs/placeholder.png";

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

      this.blogComponent.layout=1;
      this.blogComponent.text="";
      this.blogComponent.image="";
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

      this.navCtrl.pop();
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

          this.navCtrl.pop();
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

    this.navCtrl.pop();
  }

  delete()
  {
    this.blogComponentRepository.deleteBlogComponent(this.blogComponent)
      .then(key => {
        this.blogRepository.removeComponentFromBlog(this.blog, key);

        this.navCtrl.pop();



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



  //Photos ++++++++++++++++++++++++++++++++++++++++++++++++++++



  takePictureFromCamera() {
    this.camera.getPicture({
      quality: 100,
      targetHeight: 720,
      targetWidth: 1080,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }).then(imageData => {
      let image: string = "data:image/jpeg;base64," + imageData;
      this.blogComponent.image = image;
      //this.blogComponentRepository.addImage(this.blogComponent, image)
    })
      .catch(() => {

      })
  }

  takePictureFromGallery() {
    this.camera.getPicture({
      quality: 100,
      targetHeight: 720,
      targetWidth: 1080,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    }).then(imageData => {
      let image: string = "data:image/jpeg;base64," + imageData;
      this.blogComponent.image = image;
      //this.blogComponentRepository.addImage(this.blogComponent, image)
    })
      .catch(() => {

      })
  }

  chosoePictureLocation() {
    let alert = this.alertCtrl.create({
      title: "Photo aufnehmen oder aus der Galerie auswählen?",
      buttons: [
        {
          text: 'Kamera',
          handler: () => {
            this.takePictureFromCamera();
          }
        },
        {
          text: 'Galerie',
          handler: () => {
            this.takePictureFromGallery();
          }
        },
        {
          text: 'Abbrechen',
          handler: () => {

          }
        }
      ],
      inputs: [
        {
          name: 'title',
          placeholder: 'Bild Untertitel',
          value: this.blogComponent.imageSubtitle
        }
        ]
    });

    alert.present();
  }

}
