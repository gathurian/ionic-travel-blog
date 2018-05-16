import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {iBlogComponent} from "../../assets/interfaces/iBlogComponent";

/**
 * Generated class for the EditblogcomponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editblogcomponent',
  templateUrl: 'editblogcomponent.html',
})
export class EditblogcomponentPage {

  blogComponent: iBlogComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditblogcomponentPage');
  }

}
