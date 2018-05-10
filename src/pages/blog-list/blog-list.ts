import {Component} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {Blog} from "../../entities/blog";
import {Person} from "../../entities/person";
import {FullBlogPage} from "../full-blog/full-blog";
import {BlogDetailActionsheet} from "../../components/blog-detail/blog-detail-actionsheet";
import {BlogDetailAction} from "../../components/blog-detail/blog-detail-action";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {FriendListPrompt} from "../friend-list/friend-list-promt";
import {BlogDetailPrompt} from "../../components/blog-detail/blog-detail-prompt";

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
  author: Person = {firstName: 'Alan', lastName: 'Meile', friends: [], blogs: ['1uwhNkMDhSjNMwsmfQ89']};

  constructor(private actionSheetController: ActionSheetController,
              private promptController: AlertController,
              private blogRepository: BlogRepositoryProvider,
              private userRepository: UserRepositoryProvider,
              private navController: NavController,
              private navParams: NavParams) {

    if (this.navParams.get('author')) {
      this.author = this.navParams.get('author');
    }

    this.blogRepository.getAllBlogsFrom(this.author).then(blogs => {
      this.personalBlogs = blogs;
    });
  }

  presentActionSheet(blog: Blog) {

    BlogDetailActionsheet.present(this.actionSheetController).then(action => {
      switch (action) {
        case BlogDetailAction.VIEW:
          this.navController.push(FullBlogPage, {blog: blog});
          break;
        case BlogDetailAction.EDIT:
          this.presentEditPrompt(blog)
          break;
        case BlogDetailAction.DELETE:
          this.removeBlogFromList(blog);
          break;
      }
    });
  }

  private presentEditPrompt(blog: Blog) {
    BlogDetailPrompt.present(this.promptController);
  }

  private removeBlogFromList(blog: Blog) {
     this.userRepository.removeBlogFromList(this.author, blog);
  }
}
