import {ActionSheetController} from "ionic-angular";
import {BlogDetailAction} from "./blog-detail-action";

export class BlogDetailActionsheet {

  static present(actionSheetCtrl: ActionSheetController): Promise<BlogDetailAction> {

    return new Promise<BlogDetailAction>( (resolve) => {
      let actionSheet = actionSheetCtrl.create({
        title: 'Blog controller',
        buttons: [
          {
            text: 'View',
            icon: 'eye',
            handler: () => {
              resolve(BlogDetailAction.VIEW);
            }
          },
          {
            text: 'Edit',
            icon: 'hand',
            handler: () => {
              resolve(BlogDetailAction.EDIT);
            }
          },
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              resolve(BlogDetailAction.DELETE);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: 'close',
            handler: () => {
              resolve(BlogDetailAction.CANCEL);
            }
          }
        ]
      });

      actionSheet.present();
    });
  }
}
