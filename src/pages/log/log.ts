import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {LoggerRepositoryProvider} from "../../providers/logger-repository/logger-repository";
import {Observable} from "rxjs/Observable";
import {Log} from "../../entities/log";

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
  logs: Observable<Log[]>;

  constructor(private loggerRepository: LoggerRepositoryProvider) {
    this.logs = this.loggerRepository.getAllLogs();
  }
}
