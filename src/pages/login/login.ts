import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, ViewController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoginRegisterPrompt} from "./login-register-prompt";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {Person} from "../../entities/person";
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  email: string;
  password: string;

  constructor(private angularFireAuth: AngularFireAuth,
              private userRepository: UserRepositoryProvider,
              private promptControl: AlertController,
              private viewCtrl: ViewController,
              private navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);

    this.angularFireAuth.authState
      .subscribe(auth => {
        if (auth) {
          this.continueToHomePage();
        }
      });
  }

  signIn() {
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.continueToHomePage();
      });
  }

  /** Biggest spaghetti code ever :D */
  presentRegister() {
    try {
      LoginRegisterPrompt.present(this.promptControl).then(loginData => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(loginData.email, loginData.password)
          .then(() => {
            this.angularFireAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password)
              .then(() => {
                let person: Person = {
                  id: this.angularFireAuth.auth.currentUser.uid,
                  firstName: loginData.firstName,
                  lastName: loginData.lastName
                };

                this.userRepository.addNewPerson(person);
              });
          });
      });
    } catch (error) {
      console.log(error);
    }
  }

  private continueToHomePage() {
    this.navCtrl.push(HomePage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
    });
  }
}
