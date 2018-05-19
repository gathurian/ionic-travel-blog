import {AlertController} from "ionic-angular";

export class FriendListPrompt {

  static presentFriendId(promptControl: AlertController): Promise<string> {
    return new Promise(resolve => {
      let alert = promptControl.create({
        title: 'Freund hinzufügen',
        inputs: [
          {
            name: 'firstName',
            placeholder: 'Vorname'
          },
          {
            name: 'lastName',
            placeholder: 'Nachname'
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
              let fullName:string = data.firstName + " " + data.lastName;
              resolve(fullName);
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
