import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TravelBlogRepositoryProvider} from "../../providers/travel-blog-repository/travel-blog-repository";
import {Observable} from "rxjs/Observable";
import {TravelBlog} from "../../travel-blog";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bannerBase64: string;

  constructor(private travelBlogRepository: TravelBlogRepositoryProvider) {
    travelBlogRepository.getBannerAsBase64().then(imageBase64 => {
      this.bannerBase64 = imageBase64;
      console.log(this.bannerBase64);
    });
  }


}
