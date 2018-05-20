import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Person} from "../../entities/person";
import {LoggerProvider} from "../logger/logger";
import {AlertController} from "ionic-angular";

@Injectable()
export class ImageRepositoryProvider {

  constructor(private angularFireDatabase: AngularFireDatabase,
              private logger: LoggerProvider,
              private alertCtrl:AlertController) {

  }

  addProfileImage(person: Person, image: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.angularFireDatabase.list('/persons').update(person.key, {
        image: image
      }).then(() => {
        this.logger.logEvent('added image to database');
      })
        .catch(() => {
          let alert = this.alertCtrl.create({
            title: 'Kein Bild ausgewählt',
            buttons: ['OK']
          });
          alert.present();
        })
    });
  }


}
