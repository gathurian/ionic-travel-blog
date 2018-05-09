import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {TravelBlog} from "../../travel-blog";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the TravelBlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TravelBlogRepositoryProvider {

  constructor(private angularFireDatabase: AngularFireDatabase) {}

  getBannerAsBase64(): Promise<string> {

    return new Promise(resolve => {
      let travelBlog: Observable<TravelBlog>;

      travelBlog = this.angularFireDatabase.object('/travel-blog/23BCcx7B7Bl54Jxt5GAE').valueChanges();
      travelBlog.subscribe(travelBlog => {
        resolve(travelBlog.bannerBase64);
      });
    });
  }
}
