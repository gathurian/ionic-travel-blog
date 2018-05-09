import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {Blog} from "../../entities/blog";
import {Person} from "../../entities/person";

/**
 * Generated class for the BlogListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog-list',
  templateUrl: 'blog-list.html',
})
export class BlogListPage {
  personalBlogs: Blog[];
  me: Person = {firstName: 'Alan', lastName: 'Meile', friends: [], blogs: ['1uwhNkMDhSjNMwsmfQ89']};

  constructor(private blogRepository: BlogRepositoryProvider) {
    this.blogRepository.getAllBlogsFrom(this.me).then(blogs => {
      this.personalBlogs = blogs;
      console.log(this.personalBlogs);
    });
  }
}
