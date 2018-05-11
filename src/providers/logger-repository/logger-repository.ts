import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Log} from "../../entities/log";

/*
  Generated class for the LoggerRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoggerRepositoryProvider {
  logs: Observable<Log[]>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.logs = this.angularFireDatabase.list('logs').valueChanges();
  }

  getAllLogs(): Observable<Log[]> {
    return this.logs;
  }

  writeLog(log: Log) {
    const ref = this.angularFireDatabase.list('logs').push({});

    ref.set(log);
  }
}
