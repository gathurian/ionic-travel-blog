import {AlertController} from "ionic-angular";

export class BlogDetailPrompt {

  static present(promptControl: AlertController) {
    let alert = promptControl.create({
      title: 'Add new travel-blog',
      message: 'Tell your friends a story they will not forget',
      inputs: [
        {
          name: 'title',
          placeholder: 'Blog title'
        },
        {
          name: 'image',
          placeholder: 'Image as base64'
        },
        {
          name: 'story',
          placeholder: 'Blog story'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Add blog',
          handler: data => {

          }
        }
      ]
    });

    alert.present();
  }
}
