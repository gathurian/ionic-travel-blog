import {Component, Input} from '@angular/core';
import {Blog} from "../../entities/blog";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the BlogDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'blog-detail',
  templateUrl: 'blog-detail.html'
})

export class BlogDetailComponent {
  @Input('blog') blog: Blog;

  constructor() {}

  ngOnInit() {
    console.log(this.blog.story);
  }
}
