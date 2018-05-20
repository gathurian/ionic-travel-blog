import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Person} from "../../entities/person";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {iBlog} from "../../assets/interfaces/iBlog";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {ViewblogPage} from "../viewblog/viewblog";
import {Camera} from "@ionic-native/camera";
import {ImageRepositoryProvider} from "../../providers/image-repository/image-repository";
import {AlertController} from "ionic-angular";

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
              private blogRepository: BlogRepositoryProvider,
              private camera: Camera,
              private imageRepository: ImageRepositoryProvider,
              private alertCtrl: AlertController) {
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

  showBlogs(blog: iBlog) {
    this.navCtrl.push(ViewblogPage, {
      clickedBlog: blog
    });
  }

  takePictureFromCamera() {
    this.camera.getPicture({
      quality: 100,
      targetHeight: 100,
      targetWidth: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }).then(imageData => {
      let image: string = "data:image/jpeg;base64," + imageData;
      this.me.image = image;
      this.imageRepository.addProfileImage(this.me, image)
    })
      .catch(() => {

      })
  }

  takePictureFromGallery() {
    this.camera.getPicture({
      quality: 100,
      targetHeight: 100,
      targetWidth: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    }).then(imageData => {
      let image: string = "data:image/jpeg;base64," + imageData;
      this.me.image = image;
      this.imageRepository.addProfileImage(this.me, image)
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
      ]
    });

    alert.present();
  }

}

