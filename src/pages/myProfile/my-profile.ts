import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Person} from "../../entities/person";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {iBlog} from "../../assets/interfaces/iBlog";
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {ViewblogPage} from "../viewblog/viewblog";
import {Camera} from "@ionic-native/camera";
import {AlertController} from "ionic-angular";
import {AngularFireDatabase} from "angularfire2/database";
import {LoggerProvider} from "../../providers/logger/logger";

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
              private alertCtrl: AlertController,
              private angularFireDatabase:AngularFireDatabase,
              private logger:LoggerProvider) {
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
      targetHeight: 512,
      targetWidth: 512,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }).then(imageData => {
      let image: string = "data:image/jpeg;base64," + imageData;
      this.me.image = image;
      this.addProfileImage(this.me, image)
    })
      .catch(() => {

      })
  }

  takePictureFromGallery() {
    this.camera.getPicture({
      quality: 100,
      targetHeight: 512,
      targetWidth: 512,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    }).then(imageData => {
      let image: string = "data:image/jpeg;base64," + imageData;
      this.me.image = image;
      this.addProfileImage(this.me, image)
    })
      .catch(() => {

      })
  }

  choosePictureLocation() {
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

  addProfileImage(person: Person, image: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.angularFireDatabase.list('/persons').update(person.key, {
        image: image
      }).then(() => {
        this.logger.logEvent('added image to database');
      })
        .catch(() => {
          let alert = this.alertCtrl.create({
            title: 'Kein Bild ausgewählt',
            buttons: ['OK']
          });
          alert.present();
        })
    });
  }

}
