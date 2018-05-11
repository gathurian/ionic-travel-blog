import {Injectable} from '@angular/core';
import {LoggerRepositoryProvider} from "../logger-repository/logger-repository";

/*
  Generated class for the LoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoggerProvider {
  userId: string;

  constructor(public loggerRepository: LoggerRepositoryProvider) {
  }

  logEvent(event: string) {
    this.loggerRepository.writeLog({
      userId: this.userId,
      message: event,
      dateTime: new Date().toLocaleString('de-DE', { timeZone: 'UTC' })
    });
  }

  setUserId(userId: string) {
    this.userId = userId;
  }
}
