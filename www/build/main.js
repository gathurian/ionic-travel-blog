webpackJsonp([3],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(63);
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
    function UserRepositoryProvider(angularFireDatabase) {
        this.angularFireDatabase = angularFireDatabase;
        this.persons = this.getAllPersons();
    }
    UserRepositoryProvider.prototype.getAllFriendsOf = function (person) {
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
        this.angularFireDatabase.list('/persons').update(ref, person);
    };
    UserRepositoryProvider.prototype.addNewFriend = function (person, friend) {
        var updatedFriends = person.friends;
        updatedFriends.push(friend.id);
        this.angularFireDatabase.list('/persons').update(person.key, {
            friends: updatedFriends
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
    UserRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserRepositoryProvider);
    return UserRepositoryProvider;
}());

//# sourceMappingURL=user-repository.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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
    function FullBlogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blog = navParams.get('blog');
    }
    FullBlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-full-blog',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\full-blog\full-blog.html"*/'<!--\n  Generated template for the FullBlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FullBlog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="blog">\n    <img src="{{blog.bannerBase64}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{blog.title}}\n      </ion-card-title>\n      <p>\n        {{blog.story}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\full-blog\full-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FullBlogPage);
    return FullBlogPage;
}());

//# sourceMappingURL=full-blog.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_list_blog_list__ = __webpack_require__(77);
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
        this.userRepository.getPersonById('ptVtaGG0qcaDtP0HG4WjocXufNx2').then(function (person) {
            _this.me = person;
            /* Later only this is used */
            _this.userRepository.getAllFriendsOf(_this.me).then(function (friends) {
                _this.friends = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(friends);
            });
        });
    }
    FriendListPage.prototype.presentBlogList = function (person) {
        console.log("person details:\n      id:\t\t " + person.id + "\n      name:\t\t " + person.firstName + " " + person.lastName + "\n      friends:\t " + person.friends + "\n      blogs:\t " + person.blogs + "\n      key:\t\t " + person.key);
        this.navController.push(__WEBPACK_IMPORTED_MODULE_5__blog_list_blog_list__["a" /* BlogListPage */], { author: person });
    };
    FriendListPage.prototype.presentFriendPrompt = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__["a" /* FriendListPrompt */].presentFriendId(this.promptControl).then(function (friendId) {
            console.log("friendId: " + friendId);
            _this.userRepository.getPersonById(friendId)
                .then(function (friend) {
                console.log("fullname: " + friend.firstName + " " + friend.lastName);
                console.log("fullname: " + _this.me.firstName + " " + _this.me.lastName);
                _this.userRepository.addNewFriend(_this.me, friend);
            })
                .catch(function () {
                __WEBPACK_IMPORTED_MODULE_4__friend_list_promt__["a" /* FriendListPrompt */].presentUnknownId(_this.promptControl, friendId);
            });
        });
    };
    FriendListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend-list',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\friend-list\friend-list.html"*/'<!--\n  Generated template for the FriendListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FriendList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset>\n    <ion-list-header>\n      My Friends\n    </ion-list-header>\n    <ion-item *ngFor="let friend of friends | async" (click)="presentBlogList(friend)">\n      <ion-icon name="contact" item-start></ion-icon>\n      {{friend.firstName}} {{friend.lastName}}\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab small (click)="presentFriendPrompt()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\friend-list\friend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FriendListPage);
    return FriendListPage;
}());

//# sourceMappingURL=friend-list.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-list/blog-list.module": [
		452,
		2
	],
	"../pages/friend-list/friend-list.module": [
		453,
		1
	],
	"../pages/full-blog/full-blog.module": [
		454,
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
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(63);
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
    function BlogRepositoryProvider(angularFireDatabase) {
        this.angularFireDatabase = angularFireDatabase;
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
    BlogRepositoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BlogRepositoryProvider);
    return BlogRepositoryProvider;
}());

//# sourceMappingURL=blog-repository.js.map

/***/ }),

/***/ 237:
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(282);
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
    function HomePage(travelBlogRepository) {
        var _this = this;
        this.travelBlogRepository = travelBlogRepository;
        this.bannerBase64 = '../assets/imgs/placeholder.png';
        this.welcomeText = 'Hello World! If you see this your internet connection probably is slow...';
        travelBlogRepository.getBannerAsBase64().then(function (imageBase64) { return _this.bannerBase64 = imageBase64; });
        travelBlogRepository.getWelcomeText().then(function (text) { return _this.welcomeText = text; });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img src="{{this.bannerBase64}}">\n  <p padding>\n    {{this.welcomeText}}\n  </p>\n\n  <div padding>\n    <button ion-button color="danger">Sign in with Google+</button>\n  </div>\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelBlogRepositoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(63);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_friend_list_friend_list__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_repository_user_repository__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blog_list_blog_list__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_travel_blog_repository_travel_blog_repository__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_blog_repository_blog_repository__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_blog_detail_blog_detail__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__ = __webpack_require__(135);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__["a" /* FullBlogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/blog-list/blog-list.module#BlogListPageModule', name: 'BlogListPage', segment: 'blog-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend-list/friend-list.module#FriendListPageModule', name: 'FriendListPage', segment: 'friend-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/full-blog/full-blog.module#FullBlogPageModule', name: 'FullBlogPage', segment: 'full-blog', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_16__pages_full_blog_full_blog__["a" /* FullBlogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_user_repository_user_repository__["a" /* UserRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_travel_blog_repository_travel_blog_repository__["a" /* TravelBlogRepositoryProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_blog_repository_blog_repository__["a" /* BlogRepositoryProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailActionsheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_detail_action__ = __webpack_require__(237);

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

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailPrompt; });
var BlogDetailPrompt = /** @class */ (function () {
    function BlogDetailPrompt() {
    }
    BlogDetailPrompt.present = function (promptControl) {
        var alert = promptControl.create({
            title: 'Add new travel-blog',
            message: 'Tell your friends a story they will not forget',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Blog title'
                },
                {
                    name: 'image',
                    placeholder: 'Image as base64'
                },
                {
                    name: 'story',
                    placeholder: 'Blog story'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Add blog',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    return BlogDetailPrompt;
}());

//# sourceMappingURL=blog-detail-prompt.js.map

/***/ }),

/***/ 423:
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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friend_list_friend_list__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_blog_list_blog_list__ = __webpack_require__(77);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 451:
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
            selector: 'blog-detail',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\components\blog-detail\blog-detail.html"*/'<!-- Generated template for the BlogDetailComponent component -->\n<ion-card *ngIf="blog" class="card-background-page">\n  <img src="{{blog.bannerBase64}}"/>\n  <div class="card-title">{{blog.title}}</div>\n  <div class="card-subtitle">{{blog.date}}</div>\n</ion-card>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\components\blog-detail\blog-detail.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());

//# sourceMappingURL=blog-detail.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_repository_blog_repository__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_blog_full_blog__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_detail_blog_detail_actionsheet__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_repository_user_repository__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_detail_blog_detail_prompt__ = __webpack_require__(422);
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
    function BlogListPage(actionSheetController, promptController, blogRepository, userRepository, navController, navParams) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.promptController = promptController;
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
        this.navController = navController;
        this.navParams = navParams;
        this.author = { firstName: 'Alan', lastName: 'Meile', friends: [], blogs: ['1uwhNkMDhSjNMwsmfQ89'] };
        if (this.navParams.get('author')) {
            this.author = this.navParams.get('author');
        }
        this.blogRepository.getAllBlogsFrom(this.author).then(function (blogs) {
            _this.personalBlogs = blogs;
        });
    }
    BlogListPage.prototype.presentActionSheet = function (blog) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__components_blog_detail_blog_detail_actionsheet__["a" /* BlogDetailActionsheet */].present(this.actionSheetController).then(function (action) {
            switch (action) {
                case __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__["a" /* BlogDetailAction */].VIEW:
                    _this.navController.push(__WEBPACK_IMPORTED_MODULE_3__full_blog_full_blog__["a" /* FullBlogPage */], { blog: blog });
                    break;
                case __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__["a" /* BlogDetailAction */].EDIT:
                    _this.presentEditPrompt(blog);
                    break;
                case __WEBPACK_IMPORTED_MODULE_5__components_blog_detail_blog_detail_action__["a" /* BlogDetailAction */].DELETE:
                    _this.removeBlogFromList(blog);
                    break;
            }
        });
    };
    BlogListPage.prototype.presentEditPrompt = function (blog) {
        __WEBPACK_IMPORTED_MODULE_7__components_blog_detail_blog_detail_prompt__["a" /* BlogDetailPrompt */].present(this.promptController);
    };
    BlogListPage.prototype.removeBlogFromList = function (blog) {
        this.userRepository.removeBlogFromList(this.author, blog);
    };
    BlogListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog-list',template:/*ion-inline-start:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\blog-list\blog-list.html"*/'<!--\n  Generated template for the BlogListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>BlogList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <blog-detail *ngFor="let personalBlog of personalBlogs"\n               [blog]="personalBlog"\n               (click)="presentActionSheet(personalBlog)">\n  </blog-detail>\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\alkazua\Documents\WebLab\Projekt\travel-blog\src\pages\blog-list\blog-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
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

},[283]);
//# sourceMappingURL=main.js.map