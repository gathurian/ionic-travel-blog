import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {TravelBlog} from "../../entities/travel-blog";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the TravelBlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TravelBlogRepositoryProvider {
  travelBlog: Observable<TravelBlog>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.travelBlog = this.angularFireDatabase.object('/travel-blog/23BCcx7B7Bl54Jxt5GAE').valueChanges();
  }

  getBannerAsBase64(): Promise<string> {

    return new Promise(resolve => {

      this.travelBlog.subscribe(travelBlog => {
        resolve(travelBlog.bannerBase64);
      });
    });
  }

  getWelcomeText(): Promise<string> {

    return new Promise<string>( resolve => {

      this.travelBlog.subscribe(travelBlog => {
        resolve(travelBlog.welcomeText);
      });
    });
  }
}
