import {Component} from '@angular/core';
import {TravelBlogRepositoryProvider} from "../../providers/travel-blog-repository/travel-blog-repository";
import {ViewController} from "ionic-angular";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Person} from "../../entities/person";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {LoggerProvider} from "../../providers/logger/logger";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  bannerBase64: string = '../assets/imgs/placeholder.png';
  welcomeText: string = 'Hello World!';
  currentUser: Person;

  constructor(private angularFireAuth: AngularFireAuth,
              private angularFireDatabase: AngularFireDatabase,
              private travelBlogRepository: TravelBlogRepositoryProvider,
              private userRepository: UserRepositoryProvider,
              private viewCtrl: ViewController)
  {
    this.travelBlogRepository.getBannerAsBase64().then(imageBase64 => this.bannerBase64 = imageBase64);
    this.travelBlogRepository.getWelcomeText().then(welcomeText => this.welcomeText = welcomeText);

    this.userRepository.getCurrentUser().then(person => {
      this.currentUser = person;
    });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  logOut() {
    this.angularFireDatabase.database.goOffline();
    this.angularFireAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
}
