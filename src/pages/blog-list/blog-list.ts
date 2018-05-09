import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {Blog} from "../../entities/blog";
import {Person} from "../../entities/person";
import {FullBlogPage} from "../full-blog/full-blog";

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

  constructor(private blogRepository: BlogRepositoryProvider, private navController: NavController) {
    this.blogRepository.getAllBlogsFrom(this.me).then(blogs => {
      this.personalBlogs = blogs;
    });
  }

  presentBlog(blog: Blog) {
    this.navController.push(FullBlogPage, {blog: blog});
  }
}
