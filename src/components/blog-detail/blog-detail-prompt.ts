import {AlertController} from "ionic-angular";
import {Blog} from "../../assets/classes/Blog";

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
            value: blog.previewImage
          },
          {
            name: 'story',
            placeholder: 'Blog story',
            value: blog.abstract
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
              blog.previewImage = data.bannerBase64 == null ? './assets/imgs/placeholder.png' : data.bannerBase64;
              blog.abstract = data.story;

              resolve(blog);
            }
          }
        ]
      });

      alert.present();
    });
  }
}
