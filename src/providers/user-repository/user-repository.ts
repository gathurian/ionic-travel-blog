import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Person} from "../../entities/person";
import {Blog} from "../../entities/blog";
import {AngularFireAuth} from "angularfire2/auth";

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
    private angularFireDatabase: AngularFireDatabase)
  {
    this.persons = this.getAllPersons();
  }

  getCurrentUser(): Promise<Person> {

    return new Promise<Person>(resolve => {
      let key: string = this.angularFireAuth.auth.currentUser.uid;

      this.getPersonById(key).then(person => {
        resolve(person);
      });
    });
  }

  getAllFriends(person: Person): Promise<Person[]> {

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

  addNewPerson(person: Person) {
    const ref = this.angularFireDatabase.list('/persons').push({});
    person.key = ref.key;

    ref.set(person);
  }

  addNewFriend(person: Person, friend: Person) {
    let updatedFriends: string[] = person.friends != undefined ? person.friends : [];
    updatedFriends.push(friend.id);

    this.angularFireDatabase.list('/persons').update(person.key, {
      friends: updatedFriends
    });
  }

  private getAllPersons(): Observable<Person[]> {
    return this.angularFireDatabase.list('/persons').valueChanges();
  }

  removeBlogFromList(person: Person, blog: Blog) {
    let index: number = person.blogs.indexOf(blog.key, 0);
    if (index > -1) {
      person.blogs.splice(index, 1);
    }

    this.angularFireDatabase.list('/persons/').update(person.key, {
      blogs: person.blogs
    });
  }

  addNewBlog(person: Person, key: string) {
    let updatedBlogs: string[] = person.blogs != undefined ? person.blogs : [];
    updatedBlogs.push(key);

    this.angularFireDatabase.list('/persons').update(person.key, {
      blogs: updatedBlogs
    });
  }
}
