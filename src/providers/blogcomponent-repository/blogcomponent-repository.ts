import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {iBlog} from "../../assets/interfaces/iBlog";
import {iBlogComponent} from "../../assets/interfaces/iBlogComponent";
import {Person} from "../../entities/person";
import {LoggerProvider} from "../logger/logger";

/*
  Generated class for the BlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogRepositoryProvider {
  allBlogComponents: Observable<iBlogComponent[]>;

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private logger: LoggerProvider)
  {
    this.allBlogComponents = this.angularFireDatabase.list('/blogcomponents').valueChanges();
  }

  getAllComponentsFrom(blog: iBlog): Promise<iBlogComponent[]> {

    return new Promise<iBlogComponent[]>( resolve => {
      let componentsOfBlog: iBlogComponent[] = [];

      this.allBlogComponents.subscribe(components => {
        components.forEach(blogComponent => {
          if (blog.content.some(x => x === blogComponent.id)) {

            componentsOfBlog.push(blogComponent);
          }
        });
        resolve(componentsOfBlog);
      });
    });
  }

  updateBlogComponent(blogComponent: iBlogComponent) {
    this.angularFireDatabase.list('/blogcomponents').update(blogComponent.id, blogComponent).then(() => {
      this.logger.logEvent(`blogComponent ${blogComponent.id} updated`);
    });
  }

  createBlogComponent(blogComponent: iBlogComponent): Promise<string> {
    return new Promise<string>(resolve => {
      const ref = this.angularFireDatabase.list('/blogcomponents').push({});
      blogComponent.id = ref.key;


      this.angularFireDatabase.list('/blogcomponents').update(ref, blogComponent).then(() => {
        this.logger.logEvent(`new blogComponent ${blogComponent.id} created`);
        resolve(blogComponent.id);
      });
    });
  }

  deleteBlog(blogComponent: iBlogComponent): Promise<string> {
    return new Promise<string>(resolve => {
      //const ref = this.angularFireDatabase.list('/blogs').push({});
      //blog.id = ref.key;
      //blog.date = new Date().toLocaleDateString('de-DE', { timeZone: 'UTC' });

      this.angularFireDatabase.list('/blogcomponents').remove(blogComponent.id).then(() => {
        this.logger.logEvent(`new blogComponent ${blogComponent.id} deleted`);
        resolve(blogComponent.id);
      });
    });
  }
}