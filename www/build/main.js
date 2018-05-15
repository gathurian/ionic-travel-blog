webpackJsonp([5],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_repository_logger_repository__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoggerProvider = /** @class */ (function () {
    function LoggerProvider(loggerRepository) {
        this.loggerRepository = loggerRepository;
    }
    LoggerProvider.prototype.logEvent = function (event) {
        this.loggerRepository.writeLog({
            userId: this.userId,
            message: event,
            dateTime: new Date().toLocaleString('de-DE', { timeZone: 'UTC' })
        });
    };
    LoggerProvider.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    LoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger_repository_logger_repository__["a" /* LoggerRepositoryProvider */]])
    ], LoggerProvider);
    return LoggerProvider;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoggerRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoggerRepositoryProvider = /** @class */ (function () {
    function LoggerRepositoryProvider(angularFireDatabase) {
        this.angularFireDatabase = angularFireDatabase;
        this.logs = this.angularFireDatabase.list('logs').valueChanges();
    }
    LoggerRepositoryProvider.prototype.getAllLogs = function () {
        return this.logs;
    };
    LoggerRepositoryProvider.prototype.writeLog = function (log) {
        var ref = this.angularFireDatabase.list('logs').push({});
        ref.set(log);
    };
    LoggerRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoggerRepositoryProvider);
    return LoggerRepositoryProvider;
}());

//# sourceMappingURL=logger-repository.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_repository_user_repository__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_log__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(angularFireAuth, angularFireDatabase, travelBlogRepository, userRepository, viewCtrl, navCtrl) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        this.angularFireDatabase = angularFireDatabase;
        this.travelBlogRepository = travelBlogRepository;
        this.userRepository = userRepository;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.bannerBase64 = '../assets/imgs/placeholder.png';
        this.welcomeText = 'Hello World!';
        this.userRepository.getCurrentUser().then(function (person) {
            _this.currentUser = person;
            if (_this.currentUser.id == 'C8jXTNCwx1XNsqysngpwI0fnk5z2') {
                _this.isAdmin = true;
            }
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    HomePage.prototype.logOut = function () {
        this.angularFireDatabase.database.goOffline();
        this.angularFireAuth.auth.signOut().then(function () {
            location.reload();
        });
    };
    HomePage.prototype.presentLogPage = function () {
        if (this.isAdmin) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__log_log__["a" /* LogPage */]);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img src="{{bannerBase64}}">\n  <p padding>{{welcomeText}}</p>\n  <ion-list padding *ngIf="currentUser">\n    <ion-list-header>\n      User Info\n    </ion-list-header>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>Full name:</ion-col><ion-col col-7>{{currentUser.firstName}} {{currentUser.lastName}}</ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col>User id:</ion-col><ion-col col-7>{{currentUser.id}}</ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item *ngIf="currentUser.friends">\n      <ion-row>\n        <ion-col>Friends:</ion-col><ion-col col-7>{{currentUser.friends.length}}</ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item *ngIf="currentUser.blogs">\n      <ion-row>\n        <ion-col>Blogs:</ion-col><ion-col col-7>{{currentUser.blogs.length}}</ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button *ngIf="isAdmin" ion-button color="light" block (click)="presentLogPage()">\n      <ion-icon name="book" class="icon-left"></ion-icon>\n      Show anonymous logs\n    </button>\n    <button ion-button color="dark" block (click)="logOut()">\n      <ion-icon name="lock" class="icon-left"></ion-icon>\n      Log out\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_repository_blog_repository__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_blog_full_blog__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_detail_blog_detail_actionsheet__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_detail_blog_detail_prompt__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the BlogListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogListPage = /** @class */ (function () {
    function BlogListPage(actionSheetController, angularFireAuth, promptController, blogRepository, userRepository, navController, navParams) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.angularFireAuth = angularFireAuth;
        this.promptController = promptController;
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
        this.navController = navController;
        this.navParams = navParams;
        /** Are we looking at blogs from a friend or from the user */
        if (this.navParams.get('author')) {
            this.author = this.navParams.get('author');
            this.getBlogs();
        }
        else {
            this.userRepository.getCurrentUser().then(function (person) {
                _this.author = person;
                _this.getBlogs();
            });
        }
    }
    BlogListPage.prototype.presentActionSheet = function (blog) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__components_blog_detail_blog_detail_actionsheet__["a" /* BlogDetailActionsheet */].present(this.actionSheetController).then(function (action) {
            switch (action) {
                case __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__["a" /* BlogDetailAction */].VIEW:
                    _this.navController.push(__WEBPACK_IMPORTED_MODULE_3__full_blog_full_blog__["a" /* FullBlogPage */], { blog: blog });
                    break;
                case __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__["a" /* BlogDetailAction */].EDIT:
                    if (_this.angularFireAuth.auth.currentUser.uid == _this.author.id) {
                        _this.presentEditPrompt(blog);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__["a" /* BlogDetailAction */].DELETE:
                    if (_this.angularFireAuth.auth.currentUser.uid == _this.author.id) {
                        _this.removeBlogFromList(blog);
                    }
                    break;
            }
        });
    };
    BlogListPage.prototype.getBlogs = function () {
        var _this = this;
        this.blogRepository.getAllBlogsFrom(this.author).then(function (blogs) {
            _this.personalBlogs = blogs;
        });
    };
    BlogListPage.prototype.presentEditPrompt = function (blog) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__components_blog_detail_blog_detail_prompt__["a" /* BlogDetailPrompt */].present(this.promptController, blog)
            .then(function (updatedBlog) {
            console.log("Added..");
            _this.blogRepository.updateBlog(updatedBlog);
        })
            .catch(function () { return console.log("Cancel"); });
    };
    BlogListPage.prototype.presentNewPrompt = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__components_blog_detail_blog_detail_prompt__["a" /* BlogDetailPrompt */].present(this.promptController, { title: '', bannerBase64: '', story: '' })
            .then(function (newBlog) {
            _this.blogRepository.createBlog(newBlog)
                .then(function (key) {
                _this.userRepository.addNewBlog(_this.author, key);
            });
        })
            .catch(function () { return console.log("Cancel"); });
    };
    BlogListPage.prototype.removeBlogFromList = function (blog) {
        this.userRepository.removeBlogFromList(this.author, blog);
    };
    BlogListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog-list',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\blog-list\blog-list.html"*/'<!--\n  Generated template for the BlogListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Blog List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="personalBlogs; else no_blogs">\n    <blog-detail *ngFor="let personalBlog of personalBlogs"\n                 [blog]="personalBlog"\n                 (click)="presentActionSheet(personalBlog)">\n    </blog-detail>\n  </div>\n\n  <ng-template #no_blogs>\n    <div *ngIf="author">\n      <h1 text-center text-uppercase no-padding style="margin-top: 50px">\n        {{author.firstName}} {{author.lastName}} has 0 blogs\n      </h1>\n    </div>\n  </ng-template>\n\n  <ion-fab right bottom>\n    <button ion-fab small (click)="presentNewPrompt()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\blog-list\blog-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BlogListPage);
    return BlogListPage;
}());

//# sourceMappingURL=blog-list.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FullBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FullBlogPage = /** @class */ (function () {
    function FullBlogPage(navParams) {
        this.navParams = navParams;
        this.blog = this.navParams.get('blog');
    }
    FullBlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-full-blog',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\full-blog\full-blog.html"*/'<!--\n  Generated template for the FullBlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Full Blog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="blog">\n    <img src="{{blog.bannerBase64}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{blog.title}}\n      </ion-card-title>\n      <p>\n        {{blog.story}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\full-blog\full-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FullBlogPage);
    return FullBlogPage;
}());

//# sourceMappingURL=full-blog.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_repository_logger_repository__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogPage = /** @class */ (function () {
    function LogPage(loggerRepository) {
        this.loggerRepository = loggerRepository;
        this.logs = this.loggerRepository.getAllLogs();
    }
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\log\log.html"*/'<!--\n  Generated template for the LogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Log</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="logs;else no_logs">\n    <ion-list-header>\n      Travel-Blog logs\n    </ion-list-header>\n    <ion-item *ngFor="let log of logs | async">\n      <ion-icon name="book" item-start></ion-icon>\n      <ion-row><ion-col></ion-col><ion-col></ion-col></ion-row>\n      <h2>{{log.dateTime}}</h2>\n      <h3>{{log.userId}}</h3>\n      <p>{{log.message}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ng-template #no_logs>\n    <h1 text-center text-uppercase no-padding style="margin-top: 50px">There are 0 logs</h1>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\log\log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_logger_repository_logger_repository__["a" /* LoggerRepositoryProvider */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_register_prompt__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(angularFireAuth, userRepository, promptControl, viewCtrl, navCtrl) {
        this.angularFireAuth = angularFireAuth;
        this.userRepository = userRepository;
        this.promptControl = promptControl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.viewCtrl.showBackButton(false);
        this.angularFireAuth.authState
            .subscribe(function (auth) {
            if (auth) {
                _this.continueToHomePage();
            }
        });
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function () {
            _this.continueToHomePage();
        });
    };
    /** Biggest spaghetti code ever :D */
    LoginPage.prototype.presentRegister = function () {
        var _this = this;
        try {
            __WEBPACK_IMPORTED_MODULE_3__login_register_prompt__["a" /* LoginRegisterPrompt */].present(this.promptControl).then(function (loginData) {
                _this.angularFireAuth.auth.createUserWithEmailAndPassword(loginData.email, loginData.password)
                    .then(function () {
                    _this.angularFireAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password)
                        .then(function () {
                        var person = {
                            id: _this.angularFireAuth.auth.currentUser.uid,
                            firstName: loginData.firstName,
                            lastName: loginData.lastName
                        };
                        _this.userRepository.addNewPerson(person);
                    });
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    LoginPage.prototype.continueToHomePage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = 0;
            _this.navCtrl.remove(index);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list padding-right>\n\n    <ion-item>\n      <ion-label stacked>E-Mail</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item style="display: none"></ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="signIn()">\n      <ion-icon name="lock" class="icon-left"></ion-icon>\n      Sign In\n    </button>\n    <button ion-button color="dark" block (click)="presentRegister()">\n      <ion-icon name="person-add" class="icon-left"></ion-icon>\n      Register\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friend_detail_friend_detail__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendListPage = /** @class */ (function () {
    function FriendListPage(userRepository, promptControl, navController) {
        var _this = this;
        this.userRepository = userRepository;
        this.promptControl = promptControl;
        this.navController = navController;
        this.userRepository.getCurrentUser().then(function (person) {
            _this.currentUser = person;
            _this.updateFriendList();
        });
    }
    FriendListPage.prototype.updateFriendList = function () {
        var _this = this;
        this.userRepository.getAllFriends(this.currentUser).then(function (friends) {
            _this.friends = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(friends);
        });
    };
    FriendListPage.prototype.presentBlogList = function (person) {
        console.log("person details:\n      id:\t\t " + person.id + "\n      name:\t\t " + person.firstName + " " + person.lastName + "\n      friends:\t " + person.friends + "\n      blogs:\t " + person.blogs + "\n      key:\t\t " + person.key);
        this.navController.push(__WEBPACK_IMPORTED_MODULE_5__friend_detail_friend_detail__["a" /* FriendDetailPage */], { person: person });
    };
    FriendListPage.prototype.presentFriendPrompt = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__["a" /* FriendListPrompt */].presentFriendId(this.promptControl).then(function (friendId) {
            _this.userRepository.getPersonById(friendId)
                .then(function (friend) {
                console.log("fullname: " + friend.firstName + " " + friend.lastName);
                console.log("fullname: " + _this.currentUser.firstName + " " + _this.currentUser.lastName);
                _this.userRepository.addNewFriend(_this.currentUser, friend).then(function () {
                    _this.updateFriendList();
                });
            })
                .catch(function () {
                __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__["a" /* FriendListPrompt */].presentUnknownId(_this.promptControl, friendId);
            });
        });
    };
    FriendListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend-list',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-list\friend-list.html"*/'<!--\n  Generated template for the FriendListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meine Freunde</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset *ngIf="friends;else no_friends">\n    <ion-list-header>\n      Meine Freunde\n    </ion-list-header>\n    <ion-item *ngFor="let friend of friends | async" (click)="presentBlogList(friend)">\n      <ion-icon name="contact" item-start></ion-icon>\n      {{friend.firstName}} {{friend.lastName}}\n    </ion-item>\n  </ion-list>\n\n  <ng-template #no_friends>\n    <h1 text-center text-uppercase no-padding style="margin-top: 50px">Du hast (noch) keine Freunde.\n    Falls du welche hinzufügen willst, drücke auf das + unten rechts</h1>\n  </ng-template>\n\n  <ion-fab right bottom>\n    <button ion-fab small (click)="presentFriendPrompt()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-list\friend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FriendListPage);
    return FriendListPage;
}());

//# sourceMappingURL=friend-list.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-list/blog-list.module": [
		465,
		4
	],
	"../pages/friend-list/friend-list.module": [
		469,
		3
	],
	"../pages/full-blog/full-blog.module": [
		466,
		2
	],
	"../pages/log/log.module": [
		467,
		1
	],
	"../pages/login/login.module": [
		468,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BlogRepositoryProvider = /** @class */ (function () {
    function BlogRepositoryProvider(angularFireDatabase, logger) {
        this.angularFireDatabase = angularFireDatabase;
        this.logger = logger;
        this.allBlogs = this.angularFireDatabase.list('/blogs').valueChanges();
    }
    BlogRepositoryProvider.prototype.getAllBlogsFrom = function (person) {
        var _this = this;
        return new Promise(function (resolve) {
            var personBlogs = [];
            _this.allBlogs.subscribe(function (blogs) {
                blogs.forEach(function (blog) {
                    if (person.blogs.some(function (x) { return x === blog.key; })) {
                        if (blog.bannerBase64 === '')
                            blog.bannerBase64 = '../assets/imgs/placeholder.png';
                        personBlogs.push(blog);
                    }
                });
                resolve(personBlogs);
            });
        });
    };
    BlogRepositoryProvider.prototype.updateBlog = function (blog) {
        var _this = this;
        this.angularFireDatabase.list('/blogs').update(blog.key, blog).then(function () {
            _this.logger.logEvent("blog " + blog.key + " updated");
        });
    };
    BlogRepositoryProvider.prototype.createBlog = function (blog) {
        var _this = this;
        return new Promise(function (resolve) {
            var ref = _this.angularFireDatabase.list('/blogs').push({});
            blog.key = ref.key;
            blog.date = new Date().toLocaleDateString('de-DE', { timeZone: 'UTC' });
            _this.angularFireDatabase.list('/persons').update(ref, blog).then(function () {
                _this.logger.logEvent("new blog " + blog.key + " created");
                resolve(blog.key);
            });
        });
    };
    BlogRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__logger_logger__["a" /* LoggerProvider */]])
    ], BlogRepositoryProvider);
    return BlogRepositoryProvider;
}());

//# sourceMappingURL=blog-repository.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailAction; });
var BlogDetailAction;
(function (BlogDetailAction) {
    BlogDetailAction[BlogDetailAction["VIEW"] = 0] = "VIEW";
    BlogDetailAction[BlogDetailAction["EDIT"] = 1] = "EDIT";
    BlogDetailAction[BlogDetailAction["DELETE"] = 2] = "DELETE";
    BlogDetailAction[BlogDetailAction["CANCEL"] = 3] = "CANCEL";
})(BlogDetailAction || (BlogDetailAction = {}));
//# sourceMappingURL=blog-detail-action.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelBlogRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TravelBlogRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TravelBlogRepositoryProvider = /** @class */ (function () {
    function TravelBlogRepositoryProvider(angularFireDatabase) {
        this.angularFireDatabase = angularFireDatabase;
        this.travelBlog = this.angularFireDatabase.object('/travel-blog/23BCcx7B7Bl54Jxt5GAE').valueChanges();
    }
    TravelBlogRepositoryProvider.prototype.getBannerAsBase64 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.travelBlog.subscribe(function (travelBlog) {
                resolve(travelBlog.bannerBase64);
            });
        });
    };
    TravelBlogRepositoryProvider.prototype.getWelcomeText = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.travelBlog.subscribe(function (travelBlog) {
                resolve(travelBlog.welcomeText);
            });
        });
    };
    TravelBlogRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TravelBlogRepositoryProvider);
    return TravelBlogRepositoryProvider;
}());

//# sourceMappingURL=travel-blog-repository.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_repository_user_repository__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FriendDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FriendDetailPage = /** @class */ (function () {
    function FriendDetailPage(navCtrl, navParams, userRepository, blogRepository) {
        var _this = this;
        this.userRepository = userRepository;
        this.blogRepository = blogRepository;
        this.selectedPerson = navParams.get('person');
        this.blogs = [];
        this.friends = [];
        this.userRepository.getAllFriends(this.selectedPerson).then(function (friends) {
            console.log("------");
            console.log(friends);
            console.log("Person: " + _this.selectedPerson);
            _this.friends = friends;
        });
        this.blogRepository.getAllBlogsFrom(this.selectedPerson).then(function (blogs) {
            console.log("-------------");
            console.log(blogs);
            _this.blogs = blogs;
        });
    }
    FriendDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'friend-detail',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-detail\friend-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{selectedPerson.firstName}} {{selectedPerson.lastName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="photo">\n    <img src="../../assets/imgs/team-placeholder.jpg">\n  </div>\n  <div class="details">\n    Vorname: <b>{{selectedPerson.firstName}}</b>\n    <hr>\n    Nachname: <b>{{selectedPerson.lastName}}</b>\n    <hr>\n  </div>\n  <div class="details">\n  Freunde:\n  <ion-item *ngFor="let friend of friends">\n    <ion-icon name="contact" item-start></ion-icon>\n    {{friend.firstName}} {{friend.lastName}}\n  </ion-item>\n</div>\n  <div class="details">\n    Blogs:\n    <ion-item *ngFor="let blog of blogs">\n      <ion-icon name="contact" item-start></ion-icon>\n      {{blog.title}} am {{blog.date}}\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-detail\friend-detail.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */]) === "function" && _d || Object])
    ], FriendDetailPage);
    return FriendDetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=friend-detail.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_friend_list_friend_list__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friend_detail_friend_detail__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_repository_user_repository__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_blog_list_blog_list__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_blog_repository_blog_repository__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_blog_detail_blog_detail__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_full_blog_full_blog__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_logger_repository_logger_repository__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_logger_logger__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_log_log__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyDTLCfr68Rm2MGEC_pq7dW5wSOXPPnxGus",
    authDomain: "mobpro-travel-blog.firebaseapp.com",
    databaseURL: "https://mobpro-travel-blog.firebaseio.com",
    projectId: "mobpro-travel-blog",
    storageBucket: "",
    messagingSenderId: "138279644991"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_friend_list_friend_list__["a" /* FriendListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_detail_friend_detail__["a" /* FriendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_blog_list_blog_list__["a" /* BlogListPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_blog_detail_blog_detail__["a" /* BlogDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_full_blog_full_blog__["a" /* FullBlogPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_log_log__["a" /* LogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/blog-list/blog-list.module#BlogListPageModule', name: 'BlogListPage', segment: 'blog-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/full-blog/full-blog.module#FullBlogPageModule', name: 'FullBlogPage', segment: 'full-blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log/log.module#LogPageModule', name: 'LogPage', segment: 'log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend-list/friend-list.module#FriendListPageModule', name: 'FriendListPage', segment: 'friend-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_friend_list_friend_list__["a" /* FriendListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_detail_friend_detail__["a" /* FriendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_blog_list_blog_list__["a" /* BlogListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_full_blog_full_blog__["a" /* FullBlogPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_log_log__["a" /* LogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_20__providers_logger_repository_logger_repository__["a" /* LoggerRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_logger_logger__["a" /* LoggerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailActionsheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_detail_action__ = __webpack_require__(247);

var BlogDetailActionsheet = /** @class */ (function () {
    function BlogDetailActionsheet() {
    }
    BlogDetailActionsheet.present = function (actionSheetCtrl) {
        return new Promise(function (resolve) {
            var actionSheet = actionSheetCtrl.create({
                title: 'Blog controller',
                buttons: [
                    {
                        text: 'View',
                        icon: 'eye',
                        handler: function () {
                            resolve(__WEBPACK_IMPORTED_MODULE_0__blog_detail_action__["a" /* BlogDetailAction */].VIEW);
                        }
                    },
                    {
                        text: 'Edit',
                        icon: 'hand',
                        handler: function () {
                            resolve(__WEBPACK_IMPORTED_MODULE_0__blog_detail_action__["a" /* BlogDetailAction */].EDIT);
                        }
                    },
                    {
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function () {
                            resolve(__WEBPACK_IMPORTED_MODULE_0__blog_detail_action__["a" /* BlogDetailAction */].DELETE);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        icon: 'close',
                        handler: function () {
                            resolve(__WEBPACK_IMPORTED_MODULE_0__blog_detail_action__["a" /* BlogDetailAction */].CANCEL);
                        }
                    }
                ]
            });
            actionSheet.present();
        });
    };
    return BlogDetailActionsheet;
}());

//# sourceMappingURL=blog-detail-actionsheet.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailPrompt; });
var BlogDetailPrompt = /** @class */ (function () {
    function BlogDetailPrompt() {
    }
    BlogDetailPrompt.present = function (promptControl, blog) {
        return new Promise(function (resolve, reject) {
            var alert = promptControl.create({
                title: 'Edit your travel-blog',
                message: 'Tell your friends a story they will not forget',
                inputs: [
                    {
                        name: 'title',
                        placeholder: 'Blog title',
                        value: blog.title
                    },
                    {
                        name: 'image',
                        placeholder: 'Image as base64',
                        value: blog.bannerBase64
                    },
                    {
                        name: 'story',
                        placeholder: 'Blog story',
                        value: blog.story
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            reject(blog);
                        }
                    },
                    {
                        text: 'Add blog',
                        handler: function (data) {
                            blog.title = data.title;
                            blog.bannerBase64 = data.bannerBase64 == null ? '../assets/imgs/placeholder.png' : data.bannerBase64;
                            blog.story = data.story;
                            resolve(blog);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    return BlogDetailPrompt;
}());

//# sourceMappingURL=blog-detail-prompt.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterPrompt; });
var LoginRegisterPrompt = /** @class */ (function () {
    function LoginRegisterPrompt() {
    }
    LoginRegisterPrompt.present = function (promptControl) {
        return new Promise(function (resolve) {
            var alert = promptControl.create({
                title: 'Welcome',
                inputs: [
                    {
                        name: 'email',
                        type: 'email',
                        placeholder: 'E-Mail'
                    },
                    {
                        name: 'firstName',
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
                        handler: function () {
                            resolve({ email: '', password: '' });
                        }
                    },
                    {
                        text: 'Register',
                        handler: function (loginData) {
                            resolve(loginData);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    return LoginRegisterPrompt;
}());

//# sourceMappingURL=login-register-prompt.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPrompt; });
var FriendListPrompt = /** @class */ (function () {
    function FriendListPrompt() {
    }
    FriendListPrompt.presentFriendId = function (promptControl) {
        return new Promise(function (resolve) {
            var alert = promptControl.create({
                title: 'Freund hinzufügen',
                message: 'Frag deinen Freund nach seiner ID (zu finden auf der Homepage unter "User-Info"',
                inputs: [
                    {
                        name: 'friendId',
                        placeholder: 'Id'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            resolve('');
                        }
                    },
                    {
                        text: 'Hinzufügen',
                        handler: function (data) {
                            resolve(data.friendId);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ;
    FriendListPrompt.presentUnknownId = function (promptControl, friendId) {
        var alert = promptControl.create({
            title: 'Unbekannte ID',
            subTitle: "Sorry, aber wir konnten keine Person mit der folgenden ID finden: \n" + friendId,
            buttons: ['OK']
        });
        alert.present();
    };
    return FriendListPrompt;
}());

//# sourceMappingURL=friend-list-promt.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friend_list_friend_list__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_blog_list_blog_list__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'My Friends', component: __WEBPACK_IMPORTED_MODULE_5__pages_friend_list_friend_list__["a" /* FriendListPage */] },
            { title: 'My Travel Blogs', component: __WEBPACK_IMPORTED_MODULE_6__pages_blog_list_blog_list__["a" /* BlogListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BlogDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BlogDetailComponent = /** @class */ (function () {
    function BlogDetailComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('blog'),
        __metadata("design:type", Object)
    ], BlogDetailComponent.prototype, "blog", void 0);
    BlogDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'blog-detail',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\components\blog-detail\blog-detail.html"*/'<!-- Generated template for the BlogDetailComponent component -->\n<ion-card *ngIf="blog" class="card-background-page">\n  <img src="{{blog.bannerBase64}}"/>\n  <div class="card-title">{{blog.title}}</div>\n  <div class="card-subtitle">{{blog.date}}</div>\n</ion-card>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\components\blog-detail\blog-detail.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());

//# sourceMappingURL=blog-detail.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UserRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserRepositoryProvider = /** @class */ (function () {
    function UserRepositoryProvider(angularFireAuth, angularFireDatabase, logger) {
        this.angularFireAuth = angularFireAuth;
        this.angularFireDatabase = angularFireDatabase;
        this.logger = logger;
        this.persons = this.getAllPersons();
    }
    UserRepositoryProvider.prototype.getCurrentUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var key = _this.angularFireAuth.auth.currentUser.uid;
            _this.getPersonById(key).then(function (person) {
                _this.logger.setUserId(person.id);
                _this.logger.logEvent('has logged in');
                resolve(person);
            });
        });
    };
    UserRepositoryProvider.prototype.getAllFriends = function (person) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.persons.subscribe(function (persons) {
                var friends = [];
                persons.forEach(function (friend) {
                    if (person.friends.some(function (x) { return x === friend.id; })) {
                        friends.push(friend);
                    }
                });
                resolve(friends);
            });
        });
    };
    UserRepositoryProvider.prototype.getPersonById = function (personId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persons.subscribe(function (persons) {
                persons.forEach(function (person) {
                    if (person.id === personId) {
                        resolve(person);
                    }
                });
                /* Unknown Id */
                reject();
            });
        });
    };
    UserRepositoryProvider.prototype.addNewPerson = function (person) {
        var ref = this.angularFireDatabase.list('/persons').push({});
        person.key = ref.key;
        this.logger.setUserId(person.id);
        this.logger.logEvent('new registered user');
        ref.set(person);
    };
    UserRepositoryProvider.prototype.addNewFriend = function (person, friend) {
        var _this = this;
        return new Promise(function (resolve) {
            var updatedFriends = person.friends != undefined ? person.friends : [];
            updatedFriends.push(friend.id);
            _this.angularFireDatabase.list('/persons').update(person.key, {
                friends: updatedFriends
            }).then(function () {
                _this.logger.logEvent("added " + friend.id + " as a friend");
                resolve(true);
            });
        });
    };
    UserRepositoryProvider.prototype.getAllPersons = function () {
        return this.angularFireDatabase.list('/persons').valueChanges();
    };
    UserRepositoryProvider.prototype.removeBlogFromList = function (person, blog) {
        var index = person.blogs.indexOf(blog.key, 0);
        if (index > -1) {
            person.blogs.splice(index, 1);
        }
        this.angularFireDatabase.list('/persons/').update(person.key, {
            blogs: person.blogs
        });
    };
    UserRepositoryProvider.prototype.addNewBlog = function (person, key) {
        var _this = this;
        var updatedBlogs = person.blogs != undefined ? person.blogs : [];
        updatedBlogs.push(key);
        this.angularFireDatabase.list('/persons').update(person.key, {
            blogs: updatedBlogs
        }).then(function () { return _this.logger.logEvent("new blog " + key + " added"); });
    };
    UserRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */]])
    ], UserRepositoryProvider);
    return UserRepositoryProvider;
}());

//# sourceMappingURL=user-repository.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map