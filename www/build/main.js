webpackJsonp([9],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_repository_logger_repository__ = __webpack_require__(118);
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_repository_user_repository__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_log__ = __webpack_require__(146);
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
            if (_this.currentUser.id == 'lsVSzB31wxZqJ8wmo6pocyZfe9q1') {
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditblogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mytravelblogs_mytravelblogs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editblogcomponent_editblogcomponent__ = __webpack_require__(144);
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
 * Generated class for the EditblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditblogPage = /** @class */ (function () {
    function EditblogPage(navCtrl, navParams, angularFireAuth, promptController, blogRepository, userRepository, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.promptController = promptController;
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
        this.toastCtrl = toastCtrl;
        this.userRepository.getCurrentUser().then(function (person) {
            _this.author = person;
        });
        this.mode = navParams.get('mode');
        if (this.mode == "edit") {
            this.blog = navParams.get('clickedBlog');
            console.log(this.blog);
            this.modeText = "Blog bearbeiten";
        }
        else {
            this.blog = {};
            this.blog.previewImage = '../assets/imgs/placeholder.png';
            this.blog.draftFlag = false;
            this.blog.publicFlag = true;
            this.blog.content = null;
            this.blog.visibleFor = null;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            if (mm < 10) {
                var mmm = "0" + mm.toString();
            }
            var yyyy = today.getFullYear();
            this.blog.date = yyyy + "-" + mmm + "-" + dd;
            this.modeText = "Blog erstellen";
            console.log(this.blog);
        }
    }
    EditblogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditblogPage');
    };
    EditblogPage.prototype.save = function () {
        var _this = this;
        if (this.mode == "edit") {
            this.blogRepository.updateBlog(this.blog);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mytravelblogs_mytravelblogs__["a" /* MytravelblogsPage */], {});
            var toast = this.toastCtrl.create({
                message: 'Blog wurde erfolgreich geändert',
                duration: 4000,
                position: 'bottom'
            });
            //toast.onDidDismiss(() => {
            //  console.log('Dismissed toast');
            //});
            toast.present();
        }
        else {
            this.blogRepository.createBlog(this.blog)
                .then(function (key) {
                _this.userRepository.addNewBlog(_this.author, key);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mytravelblogs_mytravelblogs__["a" /* MytravelblogsPage */], {});
                var toast = _this.toastCtrl.create({
                    message: 'Blog wurde erfolgreich erstellt',
                    duration: 4000,
                    position: 'bottom'
                });
                //toast.onDidDismiss(() => {
                //  console.log('Dismissed toast');
                //});
                toast.present();
            });
        }
    };
    EditblogPage.prototype.cancel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mytravelblogs_mytravelblogs__["a" /* MytravelblogsPage */], {});
    };
    EditblogPage.prototype.delete = function () {
        var _this = this;
        this.blogRepository.deleteBlog(this.blog)
            .then(function (key) {
            _this.userRepository.removeBlogFromList(_this.author, key);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mytravelblogs_mytravelblogs__["a" /* MytravelblogsPage */], {});
            var toast = _this.toastCtrl.create({
                message: 'Blog wurde erfolgreich gelöscht',
                duration: 4000,
                position: 'bottom'
            });
            //toast.onDidDismiss(() => {
            //  console.log('Dismissed toast');
            //});
            toast.present();
        });
    };
    EditblogPage.prototype.createNewBlog = function () {
        console.log("New Blog Component");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editblogcomponent_editblogcomponent__["a" /* EditblogcomponentPage */], {
            blog: this.blog
        });
    };
    EditblogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editblog',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\editblog\editblog.html"*/'<!--\n  Generated template for the EditblogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{modeText}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="{{blog.previewImage}}"/>\n\n  <ion-fab right top>\n    <button color="light" round ion-fab class="fab-map" (click)="navToEditBlog($event, blog)">\n      <ion-icon name="camera"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Titel</ion-label>\n      <ion-input name="blog-title" placeholder="" [(ngModel)]="blog.title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kurzbeschreibung</ion-label>\n      <ion-textarea placeholder="" max="300" [(ngModel)]="blog.abstract"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Datum</ion-label>\n      <ion-datetime displayFormat="DD.MM.YYYY" pickerFormat="DD.MM.YYYY" [(ngModel)]="blog.date"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-fab center top *ngIf="mode==\'edit\'">\n          <button color="primary" round ion-fab class="fab-map" (click)="createNewBlog($event, blog)">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-fab>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-toolbar>\n    <ion-buttons *ngIf="mode==\'edit\'">\n      <button (click)="delete()" color="danger" ion-button>Löschen</button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="cancel()" color="danger" ion-button>Abbrechen</button>\n      <button (click)="save()" end ion-button>Speichern</button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\editblog\editblog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EditblogPage);
    return EditblogPage;
}());

//# sourceMappingURL=editblog.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterpopoverforblogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the FilterpopoverforblogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterpopoverforblogsPage = /** @class */ (function () {
    function FilterpopoverforblogsPage(navParams) {
        this.navParams = navParams;
    }
    FilterpopoverforblogsPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;
        }
    };
    FilterpopoverforblogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filterpopoverforblogs',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\filterpopoverforblogs\filterpopoverforblogs.html"*/'<!--\n  Generated template for the FilterpopoverforblogsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming" interface="popover">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Notifications</ion-label>\n      <ion-select [(ngModel)]="notifications" interface="action-sheet">\n        <ion-option value="enable">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year" (ionSelect)="notificationSelect($event)">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Operating System</ion-label>\n      <ion-select [(ngModel)]="os" submitText="Okay" cancelText="Nah">\n        <ion-option value="dos">DOS</ion-option>\n        <ion-option value="lunix">Linux</ion-option>\n        <ion-option value="mac7">Mac OS 7</ion-option>\n        <ion-option value="mac8">Mac OS 8</ion-option>\n        <ion-option value="win3.1">Windows 3.1</ion-option>\n        <ion-option value="win95">Windows 95</ion-option>\n        <ion-option value="win98">Windows 98</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Music</ion-label>\n      <ion-select [(ngModel)]="music" [selectOptions]="musicAlertOpts">\n        <ion-option>Alice in Chains</ion-option>\n        <ion-option>Green Day</ion-option>\n        <ion-option>Nirvana</ion-option>\n        <ion-option>Pearl Jam</ion-option>\n        <ion-option>Smashing Pumpkins</ion-option>\n        <ion-option>Soundgarden</ion-option>\n        <ion-option (select)="stpSelect()">Stone Temple Pilots</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-select [(ngModel)]="month">\n        <ion-option value="01">January</ion-option>\n        <ion-option value="02">February</ion-option>\n        <ion-option value="03">March</ion-option>\n        <ion-option value="04">April</ion-option>\n        <ion-option value="05">May</ion-option>\n        <ion-option value="06">June</ion-option>\n        <ion-option value="07">July</ion-option>\n        <ion-option value="08">August</ion-option>\n        <ion-option value="09">September</ion-option>\n        <ion-option value="10">October</ion-option>\n        <ion-option value="11">November</ion-option>\n        <ion-option value="12" checked="true">December</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="year">\n        <ion-option>1989</ion-option>\n        <ion-option>1990</ion-option>\n        <ion-option>1991</ion-option>\n        <ion-option>1992</ion-option>\n        <ion-option>1993</ion-option>\n        <ion-option checked="true">1994</ion-option>\n        <ion-option>1995</ion-option>\n        <ion-option>1996</ion-option>\n        <ion-option>1997</ion-option>\n        <ion-option>1998</ion-option>\n        <ion-option>1999</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\filterpopoverforblogs\filterpopoverforblogs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FilterpopoverforblogsPage);
    return FilterpopoverforblogsPage;
}());

//# sourceMappingURL=filterpopoverforblogs.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditblogcomponentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the EditblogcomponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditblogcomponentPage = /** @class */ (function () {
    function EditblogcomponentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditblogcomponentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditblogcomponentPage');
    };
    EditblogcomponentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editblogcomponent',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\editblogcomponent\editblogcomponent.html"*/'<!--\n  Generated template for the EditblogcomponentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editblogcomponent</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img src="{{blogComponent.image}}"/>\n\n  <ion-fab right top>\n    <button color="light" round ion-fab class="fab-map" (click)="navToEditBlog($event, blog)">\n      <ion-icon name="camera"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-toolbar>\n    <ion-buttons *ngIf="mode==\'edit\'">\n      <button (click)="delete()" color="danger" ion-button>Löschen</button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="cancel()" color="danger" ion-button>Abbrechen</button>\n      <button (click)="save()" end ion-button>Speichern</button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\editblogcomponent\editblogcomponent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditblogcomponentPage);
    return EditblogcomponentPage;
}());

//# sourceMappingURL=editblogcomponent.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friend_detail_friend_detail__ = __webpack_require__(256);
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
    FriendListPage.prototype.goToDetails = function (person) {
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
            selector: 'page-friend-list',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-list\friend-list.html"*/'<!--\n  Generated template for the FriendListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meine Freunde</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset *ngIf="friends;else no_friends">\n    <ion-list-header>\n      Meine Freunde\n    </ion-list-header>\n    <ion-item class="friend" *ngFor="let friend of friends | async" (click)="goToDetails(friend)">\n      <ion-icon name="contact" item-start></ion-icon>\n      {{friend.firstName}} {{friend.lastName}}\n    </ion-item>\n  </ion-list>\n\n  <ng-template #no_friends>\n    <h1 text-center text-uppercase no-padding style="margin-top: 50px">Du hast (noch) keine Freunde.\n    Falls du welche hinzufügen willst, drücke auf das + unten rechts</h1>\n  </ng-template>\n\n  <ion-fab right bottom>\n    <button ion-fab small (click)="presentFriendPrompt()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-list\friend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FriendListPage);
    return FriendListPage;
}());

//# sourceMappingURL=friend-list.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_repository_logger_repository__ = __webpack_require__(118);
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

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_register_prompt__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(56);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/editblog/editblog.module": [
		469,
		8
	],
	"../pages/editblogcomponent/editblogcomponent.module": [
		470,
		7
	],
	"../pages/filterpopoverforblogs/filterpopoverforblogs.module": [
		472,
		6
	],
	"../pages/friend-list/friend-list.module": [
		471,
		5
	],
	"../pages/full-blog/full-blog.module": [
		476,
		4
	],
	"../pages/log/log.module": [
		473,
		3
	],
	"../pages/login/login.module": [
		477,
		2
	],
	"../pages/mytravelblogs/mytravelblogs.module": [
		474,
		1
	],
	"../pages/viewblog/viewblog.module": [
		475,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_repository_user_repository__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewblog_viewblog__ = __webpack_require__(81);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    FriendDetailPage.prototype.showBlogs = function (blog) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewblog_viewblog__["a" /* ViewblogPage */], {
            clickedBlog: blog
        });
    };
    FriendDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'friend-detail',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-detail\friend-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{selectedPerson.firstName}} {{selectedPerson.lastName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="photo">\n    <img src="../../assets/imgs/team-placeholder.jpg">\n  </div>\n  <div class="details">\n    Vorname: <b>{{selectedPerson.firstName}}</b>\n    <hr>\n    Nachname: <b>{{selectedPerson.lastName}}</b>\n    <hr>\n  </div>\n  <div class="details">\n    Freunde:\n    <div *ngIf="friends.length > 0; else no_friends">\n      <ion-item *ngFor="let friend of friends">\n        <ion-icon name="contact" item-start></ion-icon>\n        {{friend.firstName}} {{friend.lastName}}\n      </ion-item>\n    </div>\n  </div>\n  <div class="details">\n    Blogs:\n    <div *ngIf="blogs.length > 0; else no_blogs">\n      <ion-item class="blogs" *ngFor="let blog of blogs" (click)="showBlogs(blog)">\n        <ion-icon name="contact" item-start ></ion-icon>\n        {{blog.title}} am {{blog.date}}\n      </ion-item>\n    </div>\n  </div>\n\n  <ng-template #no_friends>\n    <div class="nothing">\n      {{selectedPerson.firstName}} hat (noch) keine Freunde.\n    </div>\n  </ng-template>\n\n  <ng-template #no_blogs>\n    <div class="nothing">\n      {{selectedPerson.firstName}} hat (noch) keine Blogs.\n    </div>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\friend-detail\friend-detail.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */]) === "function" && _d || Object])
    ], FriendDetailPage);
    return FriendDetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=friend-detail.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelBlogRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FullBlogPage);
    return FullBlogPage;
}());

//# sourceMappingURL=full-blog.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_friend_list_friend_list__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friend_detail_friend_detail__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_repository_user_repository__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_blog_repository_blog_repository__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_blog_detail_blog_detail__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_logger_repository_logger_repository__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_logger_logger__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_log_log__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_editblog_editblog__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_filterpopoverforblogs_filterpopoverforblogs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_mytravelblogs_mytravelblogs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_viewblog_viewblog__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_editblogcomponent_editblogcomponent__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//Kevins Pages






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
                __WEBPACK_IMPORTED_MODULE_15__components_blog_detail_blog_detail__["a" /* BlogDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__["a" /* FullBlogPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_log_log__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_editblog_editblog__["a" /* EditblogPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filterpopoverforblogs_filterpopoverforblogs__["a" /* FilterpopoverforblogsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mytravelblogs_mytravelblogs__["a" /* MytravelblogsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_editblogcomponent_editblogcomponent__["a" /* EditblogcomponentPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_viewblog_viewblog__["a" /* ViewblogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/editblog/editblog.module#EditblogPageModule', name: 'EditblogPage', segment: 'editblog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editblogcomponent/editblogcomponent.module#EditblogcomponentPageModule', name: 'EditblogcomponentPage', segment: 'editblogcomponent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend-list/friend-list.module#FriendListPageModule', name: 'FriendListPage', segment: 'friend-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filterpopoverforblogs/filterpopoverforblogs.module#FilterpopoverforblogsPageModule', name: 'FilterpopoverforblogsPage', segment: 'filterpopoverforblogs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log/log.module#LogPageModule', name: 'LogPage', segment: 'log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mytravelblogs/mytravelblogs.module#MytravelblogsPageModule', name: 'MytravelblogsPage', segment: 'mytravelblogs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewblog/viewblog.module#ViewblogPageModule', name: 'ViewblogPage', segment: 'viewblog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/full-blog/full-blog.module#FullBlogPageModule', name: 'FullBlogPage', segment: 'full-blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_friend_list_friend_list__["a" /* FriendListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friend_detail_friend_detail__["a" /* FriendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__["a" /* FullBlogPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_log_log__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_editblog_editblog__["a" /* EditblogPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filterpopoverforblogs_filterpopoverforblogs__["a" /* FilterpopoverforblogsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mytravelblogs_mytravelblogs__["a" /* MytravelblogsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_viewblog_viewblog__["a" /* ViewblogPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_editblogcomponent_editblogcomponent__["a" /* EditblogcomponentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_19__providers_logger_repository_logger_repository__["a" /* LoggerRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_logger_logger__["a" /* LoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(117);
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
                    if (person.friends.some(function (x) { return x === friend.key; })) {
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
        this.logger.setUserId(person.key);
        this.logger.logEvent('new registered user');
        ref.set(person);
    };
    UserRepositoryProvider.prototype.addNewFriend = function (person, friend) {
        var _this = this;
        return new Promise(function (resolve) {
            var updatedFriends = person.friends != undefined ? person.friends : [];
            updatedFriends.push(friend.key);
            _this.angularFireDatabase.list('/persons').update(person.key, {
                friends: updatedFriends
            }).then(function () {
                _this.logger.logEvent("added " + friend.key + " as a friend");
                resolve(true);
            });
        });
    };
    UserRepositoryProvider.prototype.getAllPersons = function () {
        return this.angularFireDatabase.list('/persons').valueChanges();
    };
    UserRepositoryProvider.prototype.removeBlogFromList = function (person, key) {
        var index = person.blogs.indexOf(key, 0);
        if (index > -1) {
            person.blogs.splice(index, 1);
        }
        else
            console.log("ID konnte im Array nicht gefunden werden");
        this.angularFireDatabase.list('/persons/').update(person.key, {
            blogs: person.blogs
        });
    };
    UserRepositoryProvider.prototype.addNewBlog = function (person, key) {
        var _this = this;
        var updatedBlogs = person.blogs != undefined ? person.blogs : [];
        updatedBlogs.push(key);
        console.log(updatedBlogs);
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

/***/ }),

/***/ 439:
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

/***/ 440:
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friend_list_friend_list__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mytravelblogs_mytravelblogs__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//Kevins Pages

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'My Friends', component: __WEBPACK_IMPORTED_MODULE_5__pages_friend_list_friend_list__["a" /* FriendListPage */] },
            { title: 'My Travel Blogs', component: __WEBPACK_IMPORTED_MODULE_7__pages_mytravelblogs_mytravelblogs__["a" /* MytravelblogsPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 468:
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(117);
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
                    if (person.blogs.some(function (x) { return x === blog.id; })) {
                        if (blog.previewImage === '')
                            blog.previewImage = '../assets/imgs/placeholder.png';
                        personBlogs.push(blog);
                    }
                });
                resolve(personBlogs);
            });
        });
    };
    BlogRepositoryProvider.prototype.updateBlog = function (blog) {
        var _this = this;
        this.angularFireDatabase.list('/blogs').update(blog.id, blog).then(function () {
            _this.logger.logEvent("blog " + blog.id + " updated");
        });
    };
    BlogRepositoryProvider.prototype.createBlog = function (blog) {
        var _this = this;
        return new Promise(function (resolve) {
            var ref = _this.angularFireDatabase.list('/blogs').push({});
            blog.id = ref.key;
            blog.date = new Date().toLocaleDateString('de-DE', { timeZone: 'UTC' });
            _this.angularFireDatabase.list('/blogs').update(ref, blog).then(function () {
                _this.logger.logEvent("new blog " + blog.id + " created");
                resolve(blog.id);
            });
        });
    };
    BlogRepositoryProvider.prototype.deleteBlog = function (blog) {
        var _this = this;
        return new Promise(function (resolve) {
            //const ref = this.angularFireDatabase.list('/blogs').push({});
            //blog.id = ref.key;
            //blog.date = new Date().toLocaleDateString('de-DE', { timeZone: 'UTC' });
            _this.angularFireDatabase.list('/blogs').remove(blog.id).then(function () {
                _this.logger.logEvent("new blog " + blog.id + " deleted");
                resolve(blog.id);
            });
        });
    };
    BlogRepositoryProvider.prototype.removeComponentFromBlog = function (blog, id) {
        var index = blog.content.indexOf(id, 0);
        if (index > -1) {
            blog.content.splice(index, 1);
        }
        else
            console.log("ID konnte im Array nicht gefunden werden");
        this.angularFireDatabase.list('/blogs/').update(blog.id, {
            content: blog.content
        });
    };
    BlogRepositoryProvider.prototype.addComponentToBlog = function (blog, id) {
        var _this = this;
        var updatedBlogs = blog.content != undefined ? blog.content : [];
        updatedBlogs.push(id);
        console.log(updatedBlogs);
        this.angularFireDatabase.list('/blogs').update(blog.id, {
            content: updatedBlogs
        }).then(function () { return _this.logger.logEvent("new blogComponent " + id + " added"); });
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytravelblogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewblog_viewblog__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filterpopoverforblogs_filterpopoverforblogs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editblog_editblog__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_blog_repository_blog_repository__ = __webpack_require__(68);
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
 * Generated class for the MytravelblogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MytravelblogsPage = /** @class */ (function () {
    function MytravelblogsPage(navCtrl, navParams, httpClient, popoverCtrl, userRepository, blogRepository) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.popoverCtrl = popoverCtrl;
        this.userRepository = userRepository;
        this.blogRepository = blogRepository;
        this.navigationSwitch = true;
        var array = new Array();
        this.userRepository.getCurrentUser().then(function (person) {
            _this.author = person;
            _this.getBlogs();
        });
    }
    MytravelblogsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MytravelblogsPage');
    };
    MytravelblogsPage.prototype.getBlogs = function () {
        var _this = this;
        this.blogRepository.getAllBlogsFrom(this.author).then(function (blogs) {
            _this.blogs = blogs;
            console.log(_this.author);
        });
    };
    MytravelblogsPage.prototype.navToViewBlog = function (event, blog) {
        if (this.navigationSwitch) {
            // That's right, we're pushing to ourselves!
            console.log("View Block");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewblog_viewblog__["a" /* ViewblogPage */], {
                clickedBlog: blog
            });
        }
        this.navigationSwitch = true;
    };
    MytravelblogsPage.prototype.navToEditBlog = function (event, blog) {
        console.log("Edit Blog");
        this.navigationSwitch = false;
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editblog_editblog__["a" /* EditblogPage */], {
            clickedBlog: blog,
            mode: "edit"
        });
    };
    MytravelblogsPage.prototype.navToNewBlog = function (event, blog) {
        console.log("New Blog");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editblog_editblog__["a" /* EditblogPage */], {
            mode: "create"
        });
    };
    MytravelblogsPage.prototype.presentFilterPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filterpopoverforblogs_filterpopoverforblogs__["a" /* FilterpopoverforblogsPage */]);
        popover.present();
    };
    MytravelblogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytravelblogs',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\mytravelblogs\mytravelblogs.html"*/'<!--\n  Generated template for the MytravelblogsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meine Travel Blogs</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="more()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-toolbar>\n    <ion-searchbar\n      [(ngModel)]="myInput"\n      showCancelButton=true\n      (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n    <ion-buttons end>\n      <button round="true" ion-button icon-only (click)=\'presentFilterPopover()\'>\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 *ngFor=\'let blog of blogs\'>\n        <ion-card class="smallTravelBlogs" (click)="navToViewBlog($event, blog)">\n          <ion-fab right top>\n            <button color="light" round ion-fab mini class="fab-map" (click)="navToEditBlog($event, blog)">\n              <ion-icon name="settings"></ion-icon>\n            </button>\n          </ion-fab>\n          <img [src]="blog.previewImage"/>\n          <ion-card-content>\n            <ion-card-title>\n              {{blog.title}}\n              <p>{{blog.date}}</p>\n              <ion-item-divider></ion-item-divider>\n            </ion-card-title>\n            <p>\n              {{blog.abstract}}\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3>\n        <ion-fab center top>\n          <button color="primary" round ion-fab class="fab-map" (click)="navToNewBlog($event, blog)">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-fab>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!--<div showWhen="android">\n    I am visible on Android!\n  </div>\n  <container-element [ngSwitch]="switch_expression">\n    <some-element *ngSwitchCase="match_expression_1">...</some-element>\n    <some-element *ngSwitchCase="match_expression_2">...</some-element>\n    <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>\n    <ng-container *ngSwitchCase="match_expression_3">\n      <!-- use a ng-container to group multiple root nodes -->\n  <!--<inner-element></inner-element>\n  <inner-other-element></inner-other-element>\n</ng-container>\n<some-element *ngSwitchDefault>...</some-element>\n</container-element>-->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\mytravelblogs\mytravelblogs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */]])
    ], MytravelblogsPage);
    return MytravelblogsPage;
}());

//# sourceMappingURL=mytravelblogs.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewblogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the ViewblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewblogPage = /** @class */ (function () {
    function ViewblogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blog = navParams.get('clickedBlog');
        console.log(this.blog);
        //HTTP Request auf this.blog.content <Array String>
    }
    ViewblogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewblogPage');
    };
    ViewblogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewblog',template:/*ion-inline-start:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\viewblog\viewblog.html"*/'<!--\n  Generated template for the ViewblogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{blog.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>{{blog.title}}</h1>\n\n  <h3>{{blog.date}}</h3>\n\n  <p>\n    {{blog.abstract}}\n  </p>\n\n  <ion-img width="100%" height="100%" [src]="blog.previewImage"></ion-img>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Documents\WEBLAB\ionic-travel-blog\src\pages\viewblog\viewblog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ViewblogPage);
    return ViewblogPage;
}());

//# sourceMappingURL=viewblog.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map