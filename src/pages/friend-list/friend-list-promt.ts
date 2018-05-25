import {AlertController} from "ionic-angular";
import {Person} from "../../entities/person";

export class FriendListPrompt {

  static presentFriendId(promptControl: AlertController, possibleFriend:Person): Promise<string> {
    return new Promise(resolve => {
      let alert = promptControl.create({
        title: 'Freund hinzufügen',
        message: `Bist du sicher, dass du ${possibleFriend.firstName} ${possibleFriend.lastName} als Freund hinzufügen willst?`,
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
              resolve(possibleFriend.id);
            }
          }
        ]
      });

      alert.present();
    });
  };
}
