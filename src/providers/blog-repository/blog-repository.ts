import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Blog} from "../../entities/blog";
import {Person} from "../../entities/person";

/*
  Generated class for the BlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogRepositoryProvider {
  allBlogs: Observable<Blog[]>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.allBlogs = this.angularFireDatabase.list('/blogs').valueChanges();
  }

  getAllBlogsFrom(person: Person): Promise<Blog[]> {

    return new Promise<Blog[]>( resolve => {
      let personBlogs: Blog[] = [];

      this.allBlogs.subscribe(blogs => {
        blogs.forEach(blog => {
          if (person.blogs.some(x => x === blog.key)) {
            personBlogs.push(blog);
          }
        });

        resolve(personBlogs);
      });
    });
  }

}
