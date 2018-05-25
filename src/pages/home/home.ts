import {Component} from '@angular/core';
import {TravelBlogRepositoryProvider} from "../../providers/travel-blog-repository/travel-blog-repository";
import {NavController, ViewController} from "ionic-angular";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Person} from "../../entities/person";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {LogPage} from "../log/log";
import {FriendListPage} from "../friend-list/friend-list";
import {MytravelblogsPage} from "../mytravelblogs/mytravelblogs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  bannerBase64: string = './assets/imgs/travel-blog.jpg';
  welcomeText: string = '';
  currentUser: Person;
  isAdmin: boolean;

  constructor(private angularFireAuth: AngularFireAuth,
              private angularFireDatabase: AngularFireDatabase,
              private travelBlogRepository: TravelBlogRepositoryProvider,
              private userRepository: UserRepositoryProvider,
              private viewCtrl: ViewController,
              private navCtrl: NavController)
  {

    this.userRepository.getCurrentUser().then(person => {
      this.currentUser = person;

      if (this.currentUser.id == 'lsVSzB31wxZqJ8wmo6pocyZfe9q1') {
        this.isAdmin = true;
      }
    });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  presentLogPage() {
    if (this.isAdmin) {
      this.navCtrl.push(LogPage);
    }
  }
}
