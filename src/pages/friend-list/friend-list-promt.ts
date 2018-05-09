import {AlertController} from "ionic-angular";

export class FriendListPrompt {

  static presentFriendId(promptControl: AlertController): Promise<string> {
    return new Promise(resolve => {
      let alert = promptControl.create({
        title: 'Add a friend',
        message: 'Ask you friend for his id and type it in below...',
        inputs: [
          {
            name: 'friendId',
            placeholder: 'Friend id'
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
            text: 'Add friend',
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
      title: 'Unknown id',
      subTitle: `No Person found with id:\n${friendId}`,
      buttons: ['Dismiss']
    });

    alert.present();
  }
}
