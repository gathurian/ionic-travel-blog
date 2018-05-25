import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {Person} from "../../entities/person";
import {FriendListPrompt} from "./friend-list-promt";
import {FriendDetailPage} from "../friend-detail/friend-detail";
import {MyProfilePage} from "../myProfile/my-profile";
import firebase from 'firebase';

/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})

export class FriendListPage {
  friends: Observable<Person[]>;
  currentUser: Person;
  date: Date;

  peopleList: Array<any>;
  loadedPeopleList: Array<any>;
  peopleRef: firebase.database.Reference;
  searchString: string;

  constructor(private userRepository: UserRepositoryProvider,
              private promptControl: AlertController,
              private navController: NavController) {
    this.searchString = "";

    this.userRepository.getCurrentUser().then(person => {
      this.currentUser = person;
      this.updateFriendList();
    });

    this.peopleRef = firebase.database().ref('/persons');

    //pull all existing persons from the database and push them in the array peopleList and loadedPeopleList
    this.peopleRef.on('value', peopleList => {
      let people = [];
      peopleList.forEach(friend => {
        people.push(friend.val());
        return false;
      });
      this.peopleList = people;
      this.loadedPeopleList = people;
    });
  }


  private updateFriendList() {
    this.userRepository.getAllFriends(this.currentUser).then(friends => {
      this.friends = Observable.of(friends);
    });
  }

  goToDetails(person: Person) {
    console.log(
      `person details:
      id:\t\t ${person.id}
      name:\t\t ${person.firstName} ${person.lastName}
      friends:\t ${person.friends}
      blogs:\t ${person.blogs}
      key:\t\t ${person.key}`);

    this.navController.push(FriendDetailPage, {person})
  }

  presentFriendPrompt(possibleFriend: Person) {
    FriendListPrompt.presentFriendId(this.promptControl, possibleFriend).then(fullName => {
      this.userRepository.getPersonById(possibleFriend.id)
        .then(friend => {

          console.log(`fullname: ${friend.firstName} ${friend.lastName}`);
          console.log(`fullname: ${this.currentUser.firstName} ${this.currentUser.lastName}`);


          this.userRepository.addNewFriend(this.currentUser, friend).then(() => {
            this.updateFriendList();
          });
        })
        .catch(() => {
          let alert = this.promptControl.create({
            title: "Da scheint ein Fehler aufgetreten zu sein",
            message: `${Error.toString()}`,
            buttons: ['OK']
          });
          alert.present();
        });
    });
  }

  goToMyProfile() {
    let myself: Person = this.currentUser;
    this.navController.push(MyProfilePage, {myself});
  }

  initializeFriends() {
    this.peopleList = this.loadedPeopleList;
  }

  getFriends(searchbar) {
    //reset the shown list
    this.initializeFriends();

    //if searchbar is empty, return
    if (this.searchString.length < 1) {
      return;
    }

    this.peopleList = this.peopleList.filter((q) => {
      if ((q.firstName && this.searchString) || (q.lastName && this.searchString)) {
        if ((q.firstName.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) ||
          (q.lastName.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1)) {
          return true;
        }
        return false;
      }
    });
    console.log(this.searchString, this.peopleList.length);
  }
}
