import {AlertController} from "ionic-angular";

export class FriendListPrompt {

  static presentFriendId(promptControl: AlertController): Promise<string> {
    return new Promise(resolve => {
      let alert = promptControl.create({
        title: 'Freund hinzufügen',
        message: 'Frag deinen Freund nach seiner ID (zu finden auf der Homepage unter "User-Info"',
        inputs: [
          {
            name: 'friendId',
            placeholder: 'Id'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              resolve('');
            }
          },
          {
            text: 'Hinzufügen',
            handler: data => {
              resolve(data.friendId);
            }
          }
        ]
      });

      alert.present();
    });
  };


  static presentUnknownId(promptControl: AlertController, friendId: string) {
    let alert = promptControl.create({
      title: 'Unbekannte ID',
      subTitle: `Sorry, aber wir konnten keine Person mit der folgenden ID finden: \n${friendId}`,
      buttons: ['OK']
    });

    alert.present();
  }
}
