import {AlertController} from "ionic-angular";
import {LoginData} from "../../entities/login-data";

export class LoginRegisterPrompt {

  static present(promptControl: AlertController): Promise<LoginData> {

    return new Promise<LoginData>(resolve => {
      let alert = promptControl.create({
        title: 'Welcome',
        inputs: [
          {
            name: 'email',
            type: 'email',
            placeholder: 'E-Mail'
          },
          {
            name: 'displayName',
            placeholder: 'First name'
          },
          {
            name: 'lastName',
            placeholder: 'Last name'
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'Password'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              resolve({email: '', password: ''});
            }
          },
          {
            text: 'Register',
            handler: (loginData: LoginData) => {
              resolve(loginData);
            }
          }
        ]
      });

      alert.present();
    });
  }
}
