import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LogoutPage} from '../pages/home/logout';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FriendListPage} from "../pages/friend-list/friend-list";
import {FriendDetailPage} from "../pages/friend-detail/friend-detail";
import {UserRepositoryProvider} from '../providers/user-repository/user-repository';
import {HttpModule} from "@angular/http";
import { TravelBlogRepositoryProvider } from '../providers/travel-blog-repository/travel-blog-repository';
import { BlogRepositoryProvider } from '../providers/blog-repository/blog-repository';
import { BlogComponentRepositoryProvider } from '../providers/blogcomponent-repository/blogcomponent-repository';
import {BlogDetailComponent} from "../components/blog-detail/blog-detail";
import {FullBlogPage} from "../pages/full-blog/full-blog";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../pages/login/login";
import { LoggerRepositoryProvider } from '../providers/logger-repository/logger-repository';
import { LoggerProvider } from '../providers/logger/logger';
import {LogPage} from "../pages/log/log";
import {MyProfilePage} from "../pages/myProfile/my-profile";
import {Camera} from "@ionic-native/camera";
import {ImageRepositoryProvider} from "../providers/image-repository/image-repository";


//Kevins Pages
import {HttpClientModule} from '@angular/common/http';

import {EditblogPage} from '../pages/editblog/editblog';
import {FilterpopoverforblogsPage} from '../pages/filterpopoverforblogs/filterpopoverforblogs';
import {MytravelblogsPage} from '../pages/mytravelblogs/mytravelblogs';
import {ViewblogPage} from '../pages/viewblog/viewblog';
import {EditblogcomponentPage} from '../pages/editblogcomponent/editblogcomponent';


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
    LogoutPage,
    FriendListPage,
    FriendDetailPage,
    BlogDetailComponent,
    FullBlogPage,
    LoginPage,
    LogPage,
    EditblogPage,
    FilterpopoverforblogsPage,
    MytravelblogsPage,
    EditblogcomponentPage,
    ViewblogPage,
    MyProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogoutPage,
    FriendListPage,
    FriendDetailPage,
    FullBlogPage,
    LoginPage,
    LogPage,
    EditblogPage,
    FilterpopoverforblogsPage,
    MytravelblogsPage,
    ViewblogPage,
    EditblogcomponentPage,
    MyProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserRepositoryProvider,
    TravelBlogRepositoryProvider,
    BlogRepositoryProvider,
    BlogComponentRepositoryProvider,
    AngularFireAuth,
    LoggerRepositoryProvider,
    ImageRepositoryProvider,
    LoggerProvider,
    HttpClientModule,
    Camera
  ]
})
export class AppModule {
}
