import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Blog} from "../../entities/blog";
import {Person} from "../../entities/person";
import {LoggerProvider} from "../logger/logger";

/*
  Generated class for the BlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogRepositoryProvider {
  allBlogs: Observable<Blog[]>;

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private logger: LoggerProvider)
  {
    this.allBlogs = this.angularFireDatabase.list('/blogs').valueChanges();
  }

  getAllBlogsFrom(person: Person): Promise<Blog[]> {

    return new Promise<Blog[]>( resolve => {
      let personBlogs: Blog[] = [];

      this.allBlogs.subscribe(blogs => {
        blogs.forEach(blog => {
          if (person.blogs.some(x => x === blog.key)) {
            if (blog.bannerBase64 === '') blog.bannerBase64 = '../assets/imgs/placeholder.png';
            personBlogs.push(blog);
          }
        });

        resolve(personBlogs);
      });
    });
  }

  updateBlog(blog: Blog) {
    this.angularFireDatabase.list('/blogs').update(blog.key, blog).then(() => {
      this.logger.logEvent(`blog ${blog.key} updated`);
    });
  }

  createBlog(blog: Blog): Promise<string> {
    return new Promise<string>(resolve => {
      const ref = this.angularFireDatabase.list('/blogs').push({});
      blog.key = ref.key;
      blog.date = new Date().toLocaleDateString('de-DE', { timeZone: 'UTC' });

      this.angularFireDatabase.list('/persons').update(ref, blog).then(() => {
          this.logger.logEvent(`new blog ${blog.key} created`);
          resolve(blog.key);
        });
    });
  }
}
