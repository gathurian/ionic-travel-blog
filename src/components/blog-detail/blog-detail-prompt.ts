import {AlertController} from "ionic-angular";
import {Blog} from "../../entities/blog";

export class BlogDetailPrompt {

  static present(promptControl: AlertController, blog: Blog): Promise<Blog> {

    return new Promise<Blog>((resolve, reject) => {
      let alert = promptControl.create({
        title: 'Edit your travel-blog',
        message: 'Tell your friends a story they will not forget',
        inputs: [
          {
            name: 'title',
            placeholder: 'Blog title',
            value: blog.title
          },
          {
            name: 'image',
            placeholder: 'Image as base64',
            value: blog.bannerBase64
          },
          {
            name: 'story',
            placeholder: 'Blog story',
            value: blog.story
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              reject(blog);
            }
          },
          {
            text: 'Add blog',
            handler: data => {
              blog.title = data.title;
              blog.bannerBase64 = data.bannerBase64 == null ? '../assets/imgs/placeholder.png' : data.bannerBase64;
              blog.story = data.story;

              resolve(blog);
            }
          }
        ]
      });

      alert.present();
    });
  }
}
