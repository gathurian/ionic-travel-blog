import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Person} from "../../Person";

/*
  Generated class for the UserRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserRepositoryProvider {
  private persons: Observable<Person[]>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.persons = this.getAllPersons();
  }

  getAllFriendsOf(person: Person): Promise<Person[]> {

    return new Promise(resolve => {
      this.persons.subscribe(persons => {
        let friends: Person[] = [];

        persons.forEach(friend => {

          if (person.friends.some(x => x === friend.id)) {
            friends.push(friend);
          }
        });

        resolve(friends);
      });
    });
  }

  getPersonById(personId: string): Promise<Person> {

    return new Promise(resolve => {
      this.persons.subscribe(persons => {

        persons.forEach(person => {

          if (person.id === personId) {
            resolve(person);
          }
        });
      });
    });
  }

  addNewPerson(person: Person) {
    this.angularFireDatabase.list('/persons').push(person);
  }

  private getAllPersons(): Observable<Person[]> {
    return this.angularFireDatabase.list('/persons').valueChanges();
  }
}
