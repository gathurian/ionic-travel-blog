import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {iBlog} from "../../assets/interfaces/iBlog";
import {Person} from "../../entities/person";
import {LoggerProvider} from "../logger/logger";
import {AlertController} from "ionic-angular";

/*
  Generated class for the BlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogRepositoryProvider {
  allBlogs: Observable<iBlog[]>;

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private logger: LoggerProvider,
    private alertCtrl:AlertController)
  {
    this.allBlogs = this.angularFireDatabase.list('/blogs').valueChanges();
  }

  getAllBlogsFrom(person: Person): Promise<iBlog[]> {

    return new Promise<iBlog[]>( resolve => {
      let personBlogs: iBlog[] = [];

      this.allBlogs.subscribe(blogs => {
        blogs.forEach(blog => {
          if (person.blogs.some(x => x === blog.id)) {
            if (blog.previewImage === '') blog.previewImage = '../assets/imgs/placeholder.png';
            personBlogs.push(blog);
          }
        });
        resolve(personBlogs);
      });
    });
  }

  updateBlog(blog: iBlog) {
    this.angularFireDatabase.list('/blogs').update(blog.id, blog).then(() => {
      this.logger.logEvent(`blog ${blog.id} updated`);
    });
  }

  createBlog(blog: iBlog): Promise<string> {
    return new Promise<string>(resolve => {
      const ref = this.angularFireDatabase.list('/blogs').push({});
      blog.id = ref.key;
      blog.date = new Date().toLocaleDateString('de-DE', { timeZone: 'UTC' });

      this.angularFireDatabase.list('/blogs').update(ref, blog).then(() => {
        this.logger.logEvent(`new blog ${blog.id} created`);
        resolve(blog.id);
      });
    });
  }

  deleteBlog(blog: iBlog): Promise<string> {
    return new Promise<string>(resolve => {
      //const ref = this.angularFireDatabase.list('/blogs').push({});
      //blog.id = ref.key;
      //blog.date = new Date().toLocaleDateString('de-DE', { timeZone: 'UTC' });

      this.angularFireDatabase.list('/blogs').remove(blog.id).then(() => {
        this.logger.logEvent(`new blog ${blog.id} deleted`);
        resolve(blog.id);
      });
    });
  }


  removeComponentFromBlog(blog: iBlog, id: string) {
    let index: number = blog.content.indexOf(id, 0);
    if (index > -1) {
      blog.content.splice(index, 1);
    }
    else console.log("ID konnte im Array nicht gefunden werden")

    this.angularFireDatabase.list('/blogs/').update(blog.id, {
      content: blog.content
    });
  }

  addComponentToBlog(blog: iBlog, id: string) {
    let updatedBlogs: string[] = blog.content != undefined ? blog.content : [];
    updatedBlogs.push(id);

    console.log(updatedBlogs)

    this.angularFireDatabase.list('/blogs').update(blog.id, {
      content: updatedBlogs
    }).then(() => this.logger.logEvent(`new blogComponent ${id} added`));
  }

  addImage(blog: iBlog, image: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.angularFireDatabase.list('/blogs').update(blog.id, {
        previewImage: image
      }).then(() => {
        this.logger.logEvent('added image to database');
      })
        .catch(() => {
          let alert = this.alertCtrl.create({
            title: 'Kein Bild ausgewählt',
            buttons: ['OK']
          });
          alert.present();
        })
    });
  }
}
