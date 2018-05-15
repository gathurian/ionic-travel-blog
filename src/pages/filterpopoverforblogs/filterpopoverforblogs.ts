import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterpopoverforblogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filterpopoverforblogs',
  templateUrl: 'filterpopoverforblogs.html',
})
export class FilterpopoverforblogsPage {

  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;


  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;

    }
  }


}
