import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FriendListPage} from "../pages/friend-list/friend-list";
import {UserRepositoryProvider} from '../providers/user-repository/user-repository';
import {HttpModule} from "@angular/http";
import {BlogListPage} from "../pages/blog-list/blog-list";
import { TravelBlogRepositoryProvider } from '../providers/travel-blog-repository/travel-blog-repository';
import { BlogRepositoryProvider } from '../providers/blog-repository/blog-repository';
import {BlogDetailComponent} from "../components/blog-detail/blog-detail";
import {FullBlogPage} from "../pages/full-blog/full-blog";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../pages/login/login";
import { LoggerRepositoryProvider } from '../providers/logger-repository/logger-repository';
import { LoggerProvider } from '../providers/logger/logger';
import {LogPage} from "../pages/log/log";

const firebaseConfig = {
  apiKey: "AIzaSyDTLCfr68Rm2MGEC_pq7dW5wSOXPPnxGus",
  authDomain: "mobpro-travel-blog.firebaseapp.com",
  databaseURL: "https://mobpro-travel-blog.firebaseio.com",
  projectId: "mobpro-travel-blog",
  storageBucket: "",
  messagingSenderId: "138279644991"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FriendListPage,
    BlogListPage,
    BlogDetailComponent,
    FullBlogPage,
    LoginPage,
    LogPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FriendListPage,
    BlogListPage,
    FullBlogPage,
    LoginPage,
    LogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserRepositoryProvider,
    TravelBlogRepositoryProvider,
    BlogRepositoryProvider,
    AngularFireAuth,
    LoggerRepositoryProvider,
    LoggerProvider
  ]
})
export class AppModule {
}
