import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {Person} from "../../entities/person";
import {FriendListPrompt} from "./friend-list-promt";
import {BlogListPage} from "../blog-list/blog-list";

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
  me: Person;

  constructor(private userRepository: UserRepositoryProvider,
              private promptControl: AlertController,
              private navController: NavController) {

    this.userRepository.getPersonById('ptVtaGG0qcaDtP0HG4WjocXufNx2').then(person => {
      this.me = person;

      /* Later only this is used */
      this.userRepository.getAllFriendsOf(this.me).then(friends => {
        this.friends = Observable.of(friends);
      });
    });
  }

  presentBlogList(person: Person) {
    console.log(
      `person details:
      id:\t\t ${person.id}
      name:\t\t ${person.firstName} ${person.lastName}
      friends:\t ${person.friends}
      blogs:\t ${person.blogs}
      key:\t\t ${person.key}`);

      this.navController.push(BlogListPage, {author: person})
  }

  presentFriendPrompt() {
    FriendListPrompt.presentFriendId(this.promptControl).then(friendId => {
      console.log(`friendId: ${friendId}`);
      this.userRepository.getPersonById(friendId)
        .then(friend => {
          console.log(`fullname: ${friend.firstName} ${friend.lastName}`);
          console.log(`fullname: ${this.me.firstName} ${this.me.lastName}`);

          this.userRepository.addNewFriend(this.me, friend);
        })
        .catch(() => {
          FriendListPrompt.presentUnknownId(this.promptControl, friendId);
        });
    });
  }

}
