import {Component} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {BlogRepositoryProvider} from "../../providers/blog-repository/blog-repository";
import {Blog} from "../../assets/classes/Blog";
import {Person} from "../../entities/person";
import {FullBlogPage} from "../full-blog/full-blog";
import {BlogDetailActionsheet} from "../../components/blog-detail/blog-detail-actionsheet";
import {BlogDetailAction} from "../../components/blog-detail/blog-detail-action";
import {UserRepositoryProvider} from "../../providers/user-repository/user-repository";
import {BlogDetailPrompt} from "../../components/blog-detail/blog-detail-prompt";
import {AngularFireAuth} from "angularfire2/auth";

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
  author: Person;

  constructor(private actionSheetController: ActionSheetController,
              private angularFireAuth: AngularFireAuth,
              private promptController: AlertController,
              private blogRepository: BlogRepositoryProvider,
              private userRepository: UserRepositoryProvider,
              private navController: NavController,
              private navParams: NavParams) {

    /** Are we looking at blogs from a friend or from the user */
    if (this.navParams.get('author')) {
      this.author = this.navParams.get('author');
      this.getBlogs();
    } else {
      this.userRepository.getCurrentUser().then(person => {
        this.author = person;

        this.getBlogs();
      });
    }
  }

  presentActionSheet(blog: Blog) {

    BlogDetailActionsheet.present(this.actionSheetController).then(action => {
      switch (action) {
        case BlogDetailAction.VIEW:
          this.navController.push(FullBlogPage, {blog: blog});
          break;
        case BlogDetailAction.EDIT:
          if (this.angularFireAuth.auth.currentUser.uid == this.author.id) {
            this.presentEditPrompt(blog);
          }
          break;
        case BlogDetailAction.DELETE:
          if (this.angularFireAuth.auth.currentUser.uid == this.author.id) {
            this.removeBlogFromList(blog);
          }
          break;
      }
    });
  }

  private getBlogs() {
    this.blogRepository.getAllBlogsFrom(this.author).then(blogs => {
      this.personalBlogs = blogs;
    });
  }

  private presentEditPrompt(blog: Blog) {
    BlogDetailPrompt.present(this.promptController, blog)
      .then(updatedBlog => {
        console.log("Added..");
        this.blogRepository.updateBlog(updatedBlog);
      })
      .catch(() => console.log("Cancel"));
  }

  presentNewPrompt() {
    BlogDetailPrompt.present(this.promptController, new Blog({}))
      .then(newBlog => {
        this.blogRepository.createBlog(newBlog)
          .then(key => {
            this.userRepository.addNewBlog(this.author, key);
          });
      })
      .catch(() => console.log("Cancel"));
  }

  private removeBlogFromList(blog: Blog) {
    this.userRepository.removeBlogFromList(this.author, blog);
  }
}
