import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {Person} from "../../entities/person";
import {FriendListPrompt} from "./friend-list-promt";
import {FriendDetailPage} from "../friend-detail/friend-detail";
import {MyProfilePage} from "../myProfile/my-profile";

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
  date:Date;
  searchInput:string;
  possibleCandidates:Observable<Person[]>

  constructor(private userRepository: UserRepositoryProvider,
              private promptControl: AlertController,
              private navController: NavController) {

    this.userRepository.getCurrentUser().then(person => {
      this.currentUser = person;

      this.updateFriendList();
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

  presentFriendPrompt() {
    FriendListPrompt.presentFriendId(this.promptControl).then(fullName => {
      let names = fullName.split(" ");
      let firstName = names[0];
      let lastName = names[1];

      this.userRepository.getPersonByName(firstName, lastName)
        .then(friend => {
          console.log(`fullname: ${friend.firstName} ${friend.lastName}`);
          console.log(`fullname: ${this.currentUser.firstName} ${this.currentUser.lastName}`);

          this.userRepository.addNewFriend(this.currentUser, friend).then(() => {
            this.updateFriendList();
          });
        })
        .catch(() => {
          FriendListPrompt.presentUnknownId(this.promptControl, fullName);
        });
    });
  }

  goToMyProfile(){
    let myself:Person = this.currentUser;
    this.navController.push(MyProfilePage, {myself});
  }

  onSearchCancel($event: UIEvent) {
    this.emptyPossibleCandidates();
  }

  onInputOnChange($event: UIEvent) {
    if (this.searchInput.length !== 0) {
      this.friends.subscribe(friends => {
        this.userRepository.getPossibleCandidates(friends, this.searchInput).then(possibleCandidates => {
          this.possibleCandidates = Observable.of(possibleCandidates);
        });
      });
        console.log(this.possibleCandidates);
      console.log("shits still kinda working");
    } else {
      this.emptyPossibleCandidates();
      console.log("Shits working");
    }
  }

  private emptyPossibleCandidates() {
    this.possibleCandidates = Observable.of([]);
  }
}
