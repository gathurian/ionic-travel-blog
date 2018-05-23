import {Component} from '@angular/core';
import {TravelBlogRepositoryProvider} from "../../providers/travel-blog-repository/travel-blog-repository";
import {NavController, ViewController} from "ionic-angular";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Person} from "../../entities/person";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {LogPage} from "../log/log";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'logout.html'
})

export class LogoutPage {
  currentUser: Person;

  constructor(private angularFireAuth: AngularFireAuth,
              private angularFireDatabase: AngularFireDatabase,
              private travelBlogRepository: TravelBlogRepositoryProvider,
              private userRepository: UserRepositoryProvider,
              private viewCtrl: ViewController,
              private navCtrl: NavController)
  {

    this.userRepository.getCurrentUser().then(person => {
      this.currentUser = person;
      this.logOut();

      this.navCtrl.push(LoginPage);
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
