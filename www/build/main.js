webpackJsonp([4],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_repository_user_repository__ = __webpack_require__(54);
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
    function HomePage(angularFireAuth, angularFireDatabase, travelBlogRepository, userRepository, viewCtrl) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        this.angularFireDatabase = angularFireDatabase;
        this.travelBlogRepository = travelBlogRepository;
        this.userRepository = userRepository;
        this.viewCtrl = viewCtrl;
        this.bannerBase64 = '../assets/imgs/placeholder.png';
        this.welcomeText = 'Hello World!';
        this.travelBlogRepository.getBannerAsBase64().then(function (imageBase64) { return _this.bannerBase64 = imageBase64; });
        this.travelBlogRepository.getWelcomeText().then(function (welcomeText) { return _this.welcomeText = welcomeText; });
        this.userRepository.getCurrentUser().then(function (person) {
            _this.currentUser = person;
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img src="{{bannerBase64}}">\n  <p padding>{{welcomeText}}</p>\n  <ion-list padding *ngIf="currentUser">\n    <ion-list-header>\n      User Info\n    </ion-list-header>\n\n    <ion-item>\n      <ion-row>\n        <ion-col>Full name:</ion-col><ion-col col-9>{{currentUser.firstName}} {{currentUser.lastName}}</ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col>User id:</ion-col><ion-col col-9>{{currentUser.id}}</ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item *ngIf="currentUser.friends">\n      <ion-row>\n        <ion-col>Friends:</ion-col><ion-col col-9>{{currentUser.friends.length}}</ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item *ngIf="currentUser.blogs">\n      <ion-row>\n        <ion-col>Blogs:</ion-col><ion-col col-9>{{currentUser.blogs.length}}</ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="logOut()">\n      <ion-icon name="lock" class="icon-left"></ion-icon>\n      Log out\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_list_blog_list__ = __webpack_require__(79);
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
        this.navController.push(__WEBPACK_IMPORTED_MODULE_5__blog_list_blog_list__["a" /* BlogListPage */], { author: person });
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
            selector: 'page-friend-list',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\friend-list\friend-list.html"*/'<!--\n  Generated template for the FriendListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FriendList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset *ngIf="friends;else no_friends">\n    <ion-list-header>\n      My Friends\n    </ion-list-header>\n    <ion-item *ngFor="let friend of friends | async" (click)="presentBlogList(friend)">\n      <ion-icon name="contact" item-start></ion-icon>\n      {{friend.firstName}} {{friend.lastName}}\n    </ion-item>\n  </ion-list>\n\n  <ng-template #no_friends>\n    <h1 text-center text-uppercase no-padding style="margin-top: 50px">You have 0 friends</h1>\n  </ng-template>\n\n  <ion-fab right bottom>\n    <button ion-fab small (click)="presentFriendPrompt()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\friend-list\friend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FriendListPage);
    return FriendListPage;
}());

//# sourceMappingURL=friend-list.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
            selector: 'page-full-blog',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\full-blog\full-blog.html"*/'<!--\n\n  Generated template for the FullBlogPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>FullBlog</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngIf="blog">\n\n    <img src="{{blog.bannerBase64}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{blog.title}}\n\n      </ion-card-title>\n\n      <p>\n\n        {{blog.story}}\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\full-blog\full-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FullBlogPage);
    return FullBlogPage;
}());

//# sourceMappingURL=full-blog.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_register_prompt__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__ = __webpack_require__(54);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list padding-right>\n\n    <ion-item>\n      <ion-label stacked>E-Mail</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item style="display: none"></ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="signIn()">\n      <ion-icon name="lock" class="icon-left"></ion-icon>\n      Sign In\n    </button>\n    <button ion-button color="dark" block (click)="presentRegister()">\n      <ion-icon name="person-add" class="icon-left"></ion-icon>\n      Register\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-list/blog-list.module": [
		464,
		3
	],
	"../pages/friend-list/friend-list.module": [
		463,
		2
	],
	"../pages/full-blog/full-blog.module": [
		465,
		1
	],
	"../pages/login/login.module": [
		466,
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
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(248);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__logger_logger__["a" /* LoggerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__logger_logger__["a" /* LoggerProvider */]) === "function" && _b || Object])
    ], BlogRepositoryProvider);
    return BlogRepositoryProvider;
    var _a, _b;
}());

//# sourceMappingURL=blog-repository.js.map

/***/ }),

/***/ 246:
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

/***/ 247:
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

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_repository_logger_repository__ = __webpack_require__(249);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__logger_repository_logger_repository__["a" /* LoggerRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__logger_repository_logger_repository__["a" /* LoggerRepositoryProvider */]) === "function" && _a || Object])
    ], LoggerProvider);
    return LoggerProvider;
    var _a;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 249:
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], LoggerRepositoryProvider);
    return LoggerRepositoryProvider;
    var _a;
}());

//# sourceMappingURL=logger-repository.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


//import {enableProdMode} from "@angular/core";
//enableProdMode();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_friend_list_friend_list__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_repository_user_repository__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blog_list_blog_list__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_blog_repository_blog_repository__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_blog_detail_blog_detail__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_logger_repository_logger_repository__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_logger_logger__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebaseConfig = {
    apiKey: "AIzaSyBhK8ZOG_azP0hYZNn4zQtWSvSjbPl9Uiw",
    authDomain: "weblab-travel-blog.firebaseapp.com",
    databaseURL: "https://weblab-travel-blog.firebaseio.com",
    projectId: "weblab-travel-blog",
    storageBucket: "weblab-travel-blog.appspot.com",
    messagingSenderId: "627387247590"
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
                __WEBPACK_IMPORTED_MODULE_12__pages_blog_list_blog_list__["a" /* BlogListPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_blog_detail_blog_detail__["a" /* BlogDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__["a" /* FullBlogPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/friend-list/friend-list.module#FriendListPageModule', name: 'FriendListPage', segment: 'friend-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog-list/blog-list.module#BlogListPageModule', name: 'BlogListPage', segment: 'blog-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/full-blog/full-blog.module#FullBlogPageModule', name: 'FullBlogPage', segment: 'full-blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_12__pages_blog_list_blog_list__["a" /* BlogListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__["a" /* FullBlogPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_19__providers_logger_repository_logger_repository__["a" /* LoggerRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_logger_logger__["a" /* LoggerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPrompt; });
var FriendListPrompt = /** @class */ (function () {
    function FriendListPrompt() {
    }
    FriendListPrompt.presentFriendId = function (promptControl) {
        return new Promise(function (resolve) {
            var alert = promptControl.create({
                title: 'Add a friend',
                message: 'Ask you friend for his id and type it in below...',
                inputs: [
                    {
                        name: 'friendId',
                        placeholder: 'Friend id'
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
                        text: 'Add friend',
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
            title: 'Unknown id',
            subTitle: "No Person found with id:\n" + friendId,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return FriendListPrompt;
}());

//# sourceMappingURL=friend-list-promt.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailActionsheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_detail_action__ = __webpack_require__(246);

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

/***/ 433:
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

/***/ 434:
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

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friend_list_friend_list__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_blog_list_blog_list__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(139);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
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
            selector: 'blog-detail',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\components\blog-detail\blog-detail.html"*/'<!-- Generated template for the BlogDetailComponent component -->\n\n<ion-card *ngIf="blog" class="card-background-page">\n\n  <img src="{{blog.bannerBase64}}"/>\n\n  <div class="card-title">{{blog.title}}</div>\n\n  <div class="card-subtitle">{{blog.date}}</div>\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\components\blog-detail\blog-detail.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());

//# sourceMappingURL=blog-detail.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(248);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */]) === "function" && _c || Object])
    ], UserRepositoryProvider);
    return UserRepositoryProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=user-repository.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_repository_blog_repository__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_blog_full_blog__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_detail_blog_detail_actionsheet__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_detail_blog_detail_prompt__ = __webpack_require__(433);
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
            selector: 'page-blog-list',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\blog-list\blog-list.html"*/'<!--\n  Generated template for the BlogListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>BlogList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="personalBlogs; else no_blogs">\n    <blog-detail *ngFor="let personalBlog of personalBlogs"\n                 [blog]="personalBlog"\n                 (click)="presentActionSheet(personalBlog)">\n    </blog-detail>\n  </div>\n\n  <ng-template #no_blogs>\n    <div *ngIf="author">\n      <h1 text-center text-uppercase no-padding style="margin-top: 50px">\n        {{author.firstName}} {{author.lastName}} has 0 blogs\n      </h1>\n    </div>\n  </ng-template>\n\n  <ion-fab right bottom>\n    <button ion-fab small (click)="presentNewPrompt()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\ionic-travel-blog\src\pages\blog-list\blog-list.html"*/,
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

/***/ })

},[293]);
//# sourceMappingURL=main.js.map