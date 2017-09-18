webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<sse-header></sse-header>\n\n<!-- TODO Replace this content -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<sse-footer></sse-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.title = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].content.websiteTitle;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sse-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_layout_header_header_component__ = __webpack_require__("../../../../../src/app/components/common/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_layout_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/common/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_widgets_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/common/widgets/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pages_index_index_component__ = __webpack_require__("../../../../../src/app/components/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_common_layout_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_common_layout_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_common_widgets_calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_pages_index_index_component__["a" /* IndexComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_15_devextreme_angular__["DxSchedulerModule"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_firebase_firebase_service__["a" /* FirebaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

Object(__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_widgets_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/common/widgets/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pages_index_index_component__ = __webpack_require__("../../../../../src/app/components/pages/index/index.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_pages_index_index_component__["a" /* IndexComponent */], pathMatch: 'full' },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_0__components_common_widgets_calendar_calendar_component__["a" /* CalendarComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_pages_index_index_component__["a" /* IndexComponent */] } // TODO: Make "404" page
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layout/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  min-height: 75px;\n  text-align: center;\n}\n\nnav div {\n  padding-top: 1%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container\">\n    This website and the content within are produced and managed entirely by students of the Milwaukee School of Engineering, and it is not affiliated directly with the university. The views of SSE are not necessarily reflective of, or endorsed by, the Milwaukee School of Engineering.\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sse-footer',
        template: __webpack_require__("../../../../../src/app/components/common/layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/common/layout/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  display: inline-block;\n  height: 30px;\n  margin-top: -5px;\n  margin-right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"''\">\n        <img alt=\"logo\" src=\"assets/image/brand_logo.png\" />{{title}}\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n      <ul *ngFor=\"let linkSet of headerLinks\" class=\"nav navbar-nav\"\n        [class.navbar-right]=\"linkSet.isRight\">\n        <li *ngFor=\"let link of linkSet.links\" [class.dropdown]=\"link.links\">\n          <ng-container *ngIf=\"link.links;else noDropdown\">\n            <a [routerLink]=\"link.url\" [target]=\"link.target\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{link.text}} <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let sublink of link.links\">\n                <a [routerLink]=\"sublink.url\" [target]=\"sublink.target\">{{sublink.text}}</a>\n              </li>\n            </ul>\n          </ng-container>\n          <ng-template #noDropdown>\n            <a [routerLink]=\"link.url\" [target]=\"link.target\">{{link.text}}</a>\n          </ng-template>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_settings__ = __webpack_require__("../../../../../src/app/components/common/layout/header/header.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].content.websiteTitle;
        this.headerLinks = __WEBPACK_IMPORTED_MODULE_2__header_settings__["a" /* HeaderSettings */].headerLinks;
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sse-header',
        template: __webpack_require__("../../../../../src/app/components/common/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/common/layout/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layout/header/header.settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSettings; });
var HeaderSettings = (function () {
    function HeaderSettings() {
    }
    return HeaderSettings;
}());

HeaderSettings.headerLinksLeft = [
    {
        url: '/calendar',
        text: 'Calendar',
        target: '_self'
        // links: [
        //   { url: '#', text: 'Hackathon' },
        //   { url: '#', text: 'Source Trek' },
        //   { url: '#', text: 'Open Source Projects' },
        //   { url: '#', text: 'Mock Whiteboard Interview' }
        // ]
    },
    { url: '#', text: 'Announcements' },
    { url: 'https://msoe-sse.slack.com/', text: 'Slack', target: '_blank' },
    { url: '#', text: 'Discussions' }
];
HeaderSettings.headerLinksRight = [
    {
        url: '#',
        text: 'Jobs',
        links: [
            { url: '#', text: 'All Jobs' },
            { url: '#', text: 'My Postings' },
            { url: '#', text: 'Post a Job' }
        ]
    },
    {
        url: '#',
        text: 'Members',
        links: [
            { url: '#', text: 'Site-Wide Activity' },
            { url: '#', text: 'Groups' }
        ]
    },
    {
        url: '#',
        text: 'About Us',
        links: [
            { url: '#', text: 'Constitution' }
        ]
    },
];
HeaderSettings.headerLinks = [
    {
        isRight: false,
        links: HeaderSettings.headerLinksLeft
    },
    {
        isRight: true,
        links: HeaderSettings.headerLinksRight
    }
];
//# sourceMappingURL=header.settings.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/widgets/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .note {\n  color: rgba(128, 128, 128, 0.75);\n  float: right;\n  margin-top: 20px;\n  font-size: 12px;\n}\n\n/deep/ .long-title h3 {\n  font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;\n  font-weight: 200;\n  font-size: 28px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/widgets/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"long-title\">\n    <h3>SSE Calendar</h3>\n</div>\n<dx-scheduler\n    [dataSource]=\"dataSource\"\n    [editing]=\"false\"\n    startDateExpr=\"start.dateTime\"\n    endDateExpr=\"end.dateTime\"\n    textExpr=\"summary\"\n    [startDayHour]=\"7\"\n    timeZone=\"America/Chicago\"\n    [showAllDayPanel]=\"false\"\n    [views]='[\"day\", \"week\", \"month\"]'\n    currentView=\"month\"\n    [currentDate]=\"currentDate\"\n    [height]=\"700\">\n</dx-scheduler>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/widgets/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__ = __webpack_require__("../../../../devextreme/data/data_source.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store__ = __webpack_require__("../../../../devextreme/data/custom_store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarComponent = (function () {
    function CalendarComponent(http) {
        this.http = http;
        this.currentDate = new Date();
        this.getData();
    }
    // https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GoogleCalendarIntegration/Angular/Light/
    CalendarComponent.prototype.getData = function () {
        var _this = this;
        var PUBLIC_KEY = 'AIzaSyAxMty8JrtiQ4UzVaqLZ9O_JyteZEGchMc';
        var CALENDAR_ID = '53b8ab382nvvs5hdg4l7e700i0@group.calendar.google.com';
        var dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');
        this.http.get(dataUrl).subscribe(function (data) {
            _this.items = data.items;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default.a({
                store: new __WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store___default.a({
                    load: function () { return _this.items; }
                })
            });
        }, function (error) { return console.log(error); });
    };
    CalendarComponent.prototype.ngOnInit = function () {
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sse-calendar',
        template: __webpack_require__("../../../../../src/app/components/common/widgets/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/common/widgets/calendar/calendar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CalendarComponent);

var _a;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Home</h3>\n<p>The Society of Software Engineers is a professional organization built to improve the experience\n  of students enrolled in the Software Engineering program at the Milwaukee School of Engineering\n  by providing opportunities for collaboration, further education and guidance for new and old\n  students, and representation among other departments at the university.\n</p>\n<p>We focus on building you professionally, which includes improving you as a person and as a\n  coder. Our events and community are designed to help every member reach their fullest potential.\n</p>\n<p>\n  <a href=\"#\">Register</a> or <a href=\"#\">Sign In</a> to experience how awesome we are!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent() {
        this.title = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].content.websiteTitle;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sse-index',
        template: __webpack_require__("../../../../../src/app/components/pages/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirebaseService = (function () {
    function FirebaseService() {
    }
    return FirebaseService;
}());
FirebaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FirebaseService);

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    content: {
        websiteTitle: 'Society of Software Engineers'
    },
    firebaseConfig: {
        apiKey: 'AIzaSyAxMty8JrtiQ4UzVaqLZ9O_JyteZEGchMc',
        authDomain: 'msoe-sse.firebaseapp.com',
        databaseURL: 'https://msoe-sse.firebaseio.com',
        projectId: 'msoe-sse',
        storageBucket: '',
        messagingSenderId: '99434397688'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map