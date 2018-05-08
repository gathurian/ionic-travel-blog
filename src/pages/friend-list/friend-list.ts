import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {Person} from "../../Person";

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

  constructor(private userRepository: UserRepositoryProvider) {
    let personTest: Person;

    this.userRepository.getPersonById('ptVtaGG0qcaDtP0HG4WjocXufNx2').then(person => {
      personTest = person;

      /* Later only this is used */
      this.userRepository.getAllFriendsOf(personTest).then(friends => {
        this.friends = Observable.of(friends);
      });
    });
  }

  getPersonDetails(person: Person) {
    console.log(`Person-Details: ${person.firstName} ${person.lastName}`);

    let personTest: Person = {id: 'NHzsaJ8BxvZunxYm5yizfbV5fMm1', firstName: 'Kevin', lastName: 'Klinkhammer',
      friends: ['SSOfMSDL8OQ2qRbkvBiWVJ7eTj32', 'ptVtaGG0qcaDtP0HG4WjocXufNx2']};

    this.userRepository.addNewPerson(personTest);
  }
}
