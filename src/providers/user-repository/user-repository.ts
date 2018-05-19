import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Person} from "../../entities/person";
import {Blog} from "../../assets/classes/Blog";
import {AngularFireAuth} from "angularfire2/auth";
import {LoggerProvider} from "../logger/logger";

/*
  Generated class for the UserRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserRepositoryProvider {
  private persons: Observable<Person[]>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase,
    private logger: LoggerProvider)
  {
    this.persons = this.getAllPersons();
  }

  getCurrentUser(): Promise<Person> {

    return new Promise<Person>(resolve => {
      let key: string = this.angularFireAuth.auth.currentUser.uid;

      this.getPersonById(key).then(person => {
        this.logger.setUserId(person.id);
        this.logger.logEvent('has logged in');

        resolve(person);
      });
    });
  }

  getAllFriends(person: Person): Promise<Person[]> {

    return new Promise(resolve => {
      this.persons.subscribe(persons => {
        let friends: Person[] = [];

        persons.forEach(friend => {

          if (person.friends.some(x => x === friend.key)) {
            friends.push(friend);
          }
        });

        resolve(friends);
      });
    });
  }

  getPersonById(personId: string): Promise<Person> {

    return new Promise((resolve, reject) => {
      this.persons.subscribe(persons => {

        persons.forEach(person => {

          if (person.id === personId) {
            resolve(person);
          }
        });

        /* Unknown Id */
        reject();
      });
    });
  }

  getPersonByName(firstName:string, lastName:string): Promise<Person>{
    return new Promise((resolve, reject) => {
      this.persons.subscribe(persons => {

        persons.forEach(person => {

          if ((person.firstName === firstName)&&(person.lastName === lastName)) {
            resolve(person);
          }
        });

        /* Unknown Id */
        reject();
      });
    });
  }

  addNewPerson(person: Person) {
    const ref = this.angularFireDatabase.list('/persons').push({});
    person.key = ref.key;

    this.logger.setUserId(person.key);
    this.logger.logEvent('new registered user');

    ref.set(person);
  }

  addNewFriend(person: Person, friend: Person): Promise<boolean> {

    return new Promise<boolean>(resolve => {
      let updatedFriends: string[] = person.friends != undefined ? person.friends : [];
      updatedFriends.push(friend.key);

      this.angularFireDatabase.list('/persons').update(person.key, {
        friends: updatedFriends
      }).then(() => {
        this.logger.logEvent(`added ${friend.key} as a friend`);
        resolve(true);
      });
    });
  }

  private getAllPersons(): Observable<Person[]> {
    return this.angularFireDatabase.list('/persons').valueChanges();
  }

  removeBlogFromList(person: Person, key: string) {
    let index: number = person.blogs.indexOf(key, 0);
    if (index > -1) {
      person.blogs.splice(index, 1);
    }
    else console.log("ID konnte im Array nicht gefunden werden")

    this.angularFireDatabase.list('/persons/').update(person.key, {
      blogs: person.blogs
    });
  }

  addNewBlog(person: Person, key: string) {
    let updatedBlogs: string[] = person.blogs != undefined ? person.blogs : [];
    updatedBlogs.push(key);

    console.log(updatedBlogs)

    this.angularFireDatabase.list('/persons').update(person.key, {
      blogs: updatedBlogs
    }).then(() => this.logger.logEvent(`new blog ${key} added`));
  }
}
