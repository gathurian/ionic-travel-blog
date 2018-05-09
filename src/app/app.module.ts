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

const firebaseConfig = {
  apiKey: "AIzaSyBhK8ZOG_azP0hYZNn4zQtWSvSjbPl9Uiw",
  authDomain: "weblab-travel-blog.firebaseapp.com",
  databaseURL: "https://weblab-travel-blog.firebaseio.com",
  projectId: "weblab-travel-blog",
  storageBucket: "weblab-travel-blog.appspot.com",
  messagingSenderId: "627387247590"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FriendListPage,
    BlogListPage
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
    BlogListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserRepositoryProvider,
    TravelBlogRepositoryProvider
  ]
})
export class AppModule {
}
