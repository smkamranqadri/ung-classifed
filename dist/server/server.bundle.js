module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__post_service__["a"]; });



//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var config = {
    jwtSecret: 'superdupersecretofREI',
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/classified',
    port: process.env.PORT || 8000,
};
/* harmony default export */ exports["a"] = config;
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/config.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__newpost_component__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__newpost_component__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__posts_component__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__posts_component__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"];
var userSchema = new Schema({
    email: {
        type: 'String',
        required: true,
    },
    password: {
        type: 'String',
        required: true,
    },
    isAdmin: {
        type: 'Boolean',
        required: true,
        default: false,
    },
    dateAdded: {
        type: 'Date',
        default: Date.now,
        required: true,
    }
});
userSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password'))
        return next();
    // hash the password using our new salt
    user.password = __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs__["hashSync"](user.password, __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs__["genSaltSync"](8));
    return next();
});
userSchema.methods.validatePassword = function (password) {
    return __WEBPACK_IMPORTED_MODULE_1_bcrypt_nodejs__["compareSync"](password, this.password);
};
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('User', userSchema);
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/user.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_morgan__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_node_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_routes__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__server_middleware_authenticate__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__server_routes_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__server_routes_post__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__server_config__ = __webpack_require__(3);

















// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
// Set native promises as mongoose promise
// mongoose.Promise = global.Promise;
// MongoDB Connection
__WEBPACK_IMPORTED_MODULE_4_mongoose__["connect"](__WEBPACK_IMPORTED_MODULE_16__server_config__["a" /* default */].mongoURL, function (error) {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});
/**
 * Middlewares
 */
app.use(__WEBPACK_IMPORTED_MODULE_7_compression__());
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser__["json"]({ limit: '20mb' }));
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser__["urlencoded"]({ limit: '20mb', extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_6_morgan__('dev'));
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
app.use(__WEBPACK_IMPORTED_MODULE_13__server_middleware_authenticate__["a" /* default */]);
app.use('/api', __WEBPACK_IMPORTED_MODULE_14__server_routes_auth__["a" /* default */]);
app.use('/api', __WEBPACK_IMPORTED_MODULE_15__server_routes_post__["a" /* default */]);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_10__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_12__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(__WEBPACK_IMPORTED_MODULE_16__server_config__["a" /* default */].port, function () {
    console.log("Listening on port " + __WEBPACK_IMPORTED_MODULE_16__server_config__["a" /* default */].port);
});
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/server.js.map

/***/ },
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(51);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(54);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/__2.1.1.workaround.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert',
            template: __webpack_require__(45)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AlertService */]) === 'function' && _a) || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/alert.component.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/index.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/auth.guard.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/alert.service.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('/api/auth', { email: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.user = user;
                return user;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.getUser = function () {
        return this.user;
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/authentication.service.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.addPost = function (obj) {
        return this.http.post('/api/post', obj, this.jwt())
            .map(function (response) {
            if (response['_body'] == 'Post Submitted Successfully!') {
                return true;
            }
            else {
                return false;
            }
        });
    };
    PostService.prototype.getAll = function () {
        return this.http.get('/api/post', this.jwt())
            .map(function (response) {
            var posts = response.json();
            if (posts) {
                return posts;
            }
            else {
                return false;
            }
        });
    };
    PostService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        }
    };
    PostService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PostService);
    return PostService;
    var _a;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/post.service.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(46),
            styles: [__webpack_require__(42)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/app.component.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_modal__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_date_time_picker__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_date_time_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_date_time_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__newpost__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__posts__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
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
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__directives__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_11__newpost__["a" /* NewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_12__posts__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register__["a" /* RegisterComponent */]
            ],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * NodeModule, NodeHttpModule, NodeJsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_date_time_picker__["DateTimePickerModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__guards__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__services__["b" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["c" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["a" /* PostService */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/app.module.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/app.node.module.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newpost__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RoutingModule; });






var appRoutes = [
    { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_2__posts__["a" /* PostsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register__["a" /* RegisterComponent */] },
    { path: 'newpost', component: __WEBPACK_IMPORTED_MODULE_1__newpost__["a" /* NewPostComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
var RoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/app.routing.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = { email: "test@user.com", password: "123" };
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/adminDashboard' || '/userDashboard';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            if (data.isAdmin) {
                _this.router.navigate(['/admin']);
            }
            else {
                _this.router.navigate(['/posts']);
            }
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(47)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/login.component.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPostComponent = (function () {
    function NewPostComponent(router, postService, alertService) {
        this.router = router;
        this.postService = postService;
        this.alertService = alertService;
        this.loading = false;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    NewPostComponent.prototype.newpost = function () {
        var _this = this;
        event.preventDefault();
        this.loading = true;
        this.postService.addPost(this.model)
            .subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/posts']);
            }
            console.log(res);
        }, function (error) {
            console.log(error);
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    NewPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            styles: [__webpack_require__(43)],
            template: __webpack_require__(48)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AlertService */]) === 'function' && _c) || Object])
    ], NewPostComponent);
    return NewPostComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/newpost.component.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = (function () {
    function PostsComponent(router, postService, alertService) {
        this.router = router;
        this.postService = postService;
        this.alertService = alertService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    PostsComponent.prototype.loadPosts = function () {
        var _this = this;
        this.postService.getAll()
            .subscribe(function (posts) {
            _this.posts = posts;
        }, function (error) {
            _this.alertService.error(error._body);
        });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            styles: [__webpack_require__(44)],
            template: __webpack_require__(49)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _c) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/posts.component.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        this.loading = true;
        this.model.role = 'User';
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error._body);
        //             this.loading = false;
        //         });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(50)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/register.component.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/environment.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/polyfills.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [
    'login', 'register', 'posts', 'newpost', 'admin'
];
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/server.routes.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_post__ = __webpack_require__(39);
/* harmony export (immutable) */ exports["b"] = newpost;
/* harmony export (immutable) */ exports["a"] = posts;

function newpost(req, res) {
    var newpost = req.body;
    __WEBPACK_IMPORTED_MODULE_0__models_post__["a" /* default */].create(newpost, function (err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send('Post Submitted Successfully!');
        }
    });
}
function posts(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__models_post__["a" /* default */].find({})
        .exec(function (err, posts) {
        if (err) {
            res.status(500).send(err);
        }
        else if (posts.length > 0) {
            res.status(200).json(posts);
        }
        else {
            res.status(500).send('No Post Found!');
        }
    });
}
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/post.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(12);
/* unused harmony export isAdmin */
/* unused harmony export isLoggedIn */



/* harmony default export */ exports["a"] = function (req, res, next) {
    var authorizationHeader = req.headers.authorization;
    var token;
    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    console.log('authorizationHeader', authorizationHeader);
    console.log('token', token);
    if (token) {
        __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__["verify"](token, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].jwtSecret, function (err, decoded) {
            if (err) {
                res.status(401).json({ error: 'Failed to authenticate' });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].findOne({ _id: decoded.id }).exec(function (err, user) {
                    if (err) {
                        console.log('authenticate err', err);
                        res.status(404).json({ error: 'No such user' });
                    }
                    Object.assign(req, { currentUser: user });
                    next();
                });
            }
        });
    }
    else {
        next();
    }
};;
function isAdmin(req, res, next) {
    if (!req['currentUser']) {
        res.status(401).json({ error: 'Log in required.' });
    }
    else if (req['currentUser'].isAdmin) {
        next();
    }
    else {
        res.status(401).json({ error: 'Admin authorization required.' });
    }
}
function isLoggedIn(req, res, next) {
    if (req['currentUser']) {
        next();
    }
    else {
        res.status(401).json({ error: 'Log in required.' });
    }
}
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/authenticate.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"];
var postSchema = new Schema({
    title: {
        type: 'String',
        required: true
    },
    description: {
        type: 'String',
        required: true
    },
    price: {
        type: 'String',
        required: true
    }
});
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('Post', postSchema);
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/post.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(3);




var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
// const admin = new User({
//   email: 'admin@rei.com',
//   password: '123',
//   isAdmin: true,
//   dateAdded: new Date(),
// });
// admin.save();
router.post('/auth', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    console.log('email', email);
    console.log('password', password);
    __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].findOne({ email: email }).exec(function (err, user) {
        if (err) {
            console.log('login err', err);
            return res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
        console.log('err', err);
        console.log('user', user);
        if (!user) {
            console.log('no user', user);
            return res.status(404).json({ error: 'No such user' });
        }
        if (user.validatePassword(password)) {
            var currentUser = {
                id: user._id,
                username: user.email,
                isAdmin: user.isAdmin,
            };
            var token = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__["sign"](currentUser, __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].jwtSecret);
            req['currentUser'] = currentUser;
            currentUser['token'] = token;
            res.json(currentUser);
        }
        else {
            res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
    });
});
/* harmony default export */ exports["a"] = router;
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/auth.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_post__ = __webpack_require__(37);


var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
router.get('/post', __WEBPACK_IMPORTED_MODULE_1__controllers_post__["a" /* posts */]);
router.post('/post', __WEBPACK_IMPORTED_MODULE_1__controllers_post__["b" /* newpost */]);
/* harmony default export */ exports["a"] = router;
//# sourceMappingURL=/home/mkamran/Repositories/ung-classified/src/post.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = ".row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = "#wrapper {\n    padding-left: 0;\n    transition: all 0.5s ease;\n}\n\n#wrapper.toggled {\n    padding-left: 250px;\n}\n\n#sidebar-wrapper {\n    z-index: 1000;\n    position: fixed;\n    left: 250px;\n    width: 0;\n    height: 100%;\n    margin-left: -250px;\n    overflow-y: auto;\n    background: #337AB6;\n    transition: all 0.5s ease;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n    width: 250px;\n}\n\n#page-content-wrapper {\n    width: 100%;\n    position: absolute;\n    padding: 15px;\n}\n\n#wrapper.toggled #page-content-wrapper {\n    position: absolute;\n    margin-right: -250px;\n}\n\n/* Sidebar Styles */\n\n.sidebar-nav {\n    position: absolute;\n    top: 0;\n    width: 350px;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.sidebar-nav li {\n    text-indent: 20px;\n    line-height: 40px;\n}\nli{\n    padding: 15px;\n}\n\n.sidebar-nav li a {\n    display: block;\n    text-decoration: none;\n    color: #999999;\n}\n\n.sidebar-nav li a:hover {\n    text-decoration: none;\n    color: #fff;\n    background: rgba(255,255,255,0.2);\n}\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n    text-decoration: none;\n}\n\n.sidebar-nav > .sidebar-brand {\n    height: 65px;\n    font-size: 18px;\n    line-height: 60px;\n}\n\n.sidebar-nav > .sidebar-brand a {\n    color: #999999;\n}\n\n.sidebar-nav > .sidebar-brand a:hover {\n    color: #fff;\n    background: none;\n}\n\n@media(min-width:768px) {\n\n    #wrapper.toggled {\n        padding-left: 0;\n    }\n\n    #sidebar-wrapper {\n        width: 350px;\n    }\n\n    #wrapper.toggled #sidebar-wrapper {\n        width: 0;\n    }\n\n    #page-content-wrapper {\n        padding: 20px;\n        position: relative;\n    }\n\n    #wrapper.toggled #page-content-wrapper {\n        position: relative;\n        margin-right: 0;\n    }\n}\n\n.btn-primary {\n    color: black;\n    background-color:white;\n    border-color: #2e6da4;\n}\nh1{\n    color: white\n}\n.centered{\n    font-size: 20px;\n    text-align: center;\n}"

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = "<alert></alert>\n<router-outlet></router-outlet>\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <h2>Login</h2>\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <!--<a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>-->\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <nav class=\"navbar navbar-default\" style=\"display: flex; align-items: center;\">\n        <div class=\"col-lg-11\">\n            <h3>{{currentUser.username}}</h3>\n        </div>\n        <div class=\"col-lg-1\">\n            <a [routerLink]=\"['/posts']\" style=\"margin-right: 20px;\">Posts</a>\n            <a [routerLink]=\"['/login']\">Logout</a>\n        </div>\n    </nav>\n\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 \">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">New Post</div>\n                        <div class=\"panel-body centered\">\n                            <form name=\"form\" (ngSubmit)=\"f.form.valid && newpost()\" #f=\"ngForm\" novalidate>\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !title.valid }\">\n                                    <label for=\"title\">Title</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" required />\n                                    <div *ngIf=\"f.submitted && !title.valid\" class=\"help-block\">Title is required</div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !description.valid }\">\n                                    <label for=\"description\">Description</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"model.description\" #description=\"ngModel\" required\n                                    />\n                                    <div *ngIf=\"f.submitted && !description.valid\" class=\"help-block\">Description is required</div>\n                                </div>\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !price.valid }\">\n                                    <label for=\"price\">Price</label>\n                                    <input type=\"number\" class=\"form-control\" name=\"price\" [(ngModel)]=\"model.price\" #price=\"ngModel\" required />\n                                    <div *ngIf=\"f.submitted && !price.valid\" class=\"help-block\">Price is required</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n                                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                    />\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n</div>\n"

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <nav class=\"navbar navbar-default\" style=\"display: flex; align-items: center;\">\n        <div class=\"col-lg-11\">\n            <h3>{{currentUser.username }}</h3>\n        </div>\n        <div class=\"col-lg-1\">\n            <a [routerLink]=\"['/newpost']\" style=\"margin-right: 20px;\">New Post</a>\n            <a [routerLink]=\"['/login']\">Logout</a>\n        </div>\n    </nav>\n\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">Posts</div>\n                        <div class=\"panel-body\">\n                            <div class=\"col-lg-4\" *ngFor=\"let post of posts\">\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-body centered\">\n                                        <h4>Title: {{post.title}}</h4>\n                                        <h4>Description: {{post.description}}</h4>\n                                        <h4>Price: {{post.price}}</h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n</div>\n"

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <h2>Register</h2>\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                    <label for=\"firstName\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = require("morgan");

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = require("ng2-date-time-picker");

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = require("ng2-modal");

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = require("rxjs/Subject");

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjIyNTNhODRkMjAzM2FmZGNhYTEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvX3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY29uZmlnLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL19ndWFyZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25ld3Bvc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3N0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JlZ2lzdGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbW9kZWxzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvX2RpcmVjdGl2ZXMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvX2RpcmVjdGl2ZXMvYWxlcnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9fZGlyZWN0aXZlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL19ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL19zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9fc2VydmljZXMvcG9zdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25ld3Bvc3QvbmV3cG9zdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY29udHJvbGxlcnMvcG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21pZGRsZXdhcmUvYXV0aGVudGljYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbW9kZWxzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9wb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uZXdwb3N0L25ld3Bvc3QuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9zdHMvcG9zdHMuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvX2RpcmVjdGl2ZXMvYWxlcnQvYWxlcnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25ld3Bvc3QvbmV3cG9zdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdC1ub2RlanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1kYXRlLXRpbWUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7QUNBcnNGLHVHQUF1RyxxQkFBcUIsMERBQTBELHVCQUF1QixpSUFBaUksdXNCQUF1c0IsWUFBWSxrRUFBa0Usa0JBQWtCLDREQUE0RCxZQUFZLG9SOzs7Ozs7QUNBN3JDLHdVQUF3VSw4Q0FBOEMsa2FBQWthLDhDQUE4QywyWkFBMlosOENBQThDLHlaQUF5Wiw4Q0FBOEMsa2pCQUFrakIsNmtDOzs7Ozs7QUNBeHdFLDhDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHVFOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEseUQ7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMjI1M2E4NGQyMDMzYWZkY2FhMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bvc3Quc2VydmljZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL19zZXJ2aWNlcy9pbmRleC50cyIsImxldCBjb25maWcgPSB7XG4gICAgand0U2VjcmV0OiAnc3VwZXJkdXBlcnNlY3JldG9mUkVJJyxcbiAgICBtb25nb1VSTDogcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2xhc3NpZmllZCcsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2NvbmZpZy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLmd1YXJkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL19ndWFyZHMvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9sb2dpbi9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vbmV3cG9zdC5jb21wb25lbnQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9uZXdwb3N0L2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9wb3N0cy5jb21wb25lbnQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3N0cy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdC1ub2RlanMnO1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpc0FkbWluOiB7XG4gICAgICAgIHR5cGU6ICdCb29sZWFuJyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgZGF0ZUFkZGVkOiB7XG4gICAgICAgIHR5cGU6ICdEYXRlJyxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH1cbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgbW9uZ29vc2UuRG9jdW1lbnQge1xuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc1dvcmQ6IHN0cmluZyxcbiAgICBpc0FkbWluOiBib29sZWFuLFxuICAgIGRhdGVBZGRlZDogRGF0ZSxcbiAgICB2YWxpZGF0ZVBhc3N3b3JkOiAocHc6IHN0cmluZykgPT4ge31cbn1cblxudXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBmdW5jdGlvbiAobmV4dCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzO1xuICAgIC8vIG9ubHkgaGFzaCB0aGUgcGFzc3dvcmQgaWYgaXQgaGFzIGJlZW4gbW9kaWZpZWQgKG9yIGlzIG5ldylcbiAgICBpZiAoIXVzZXIuaXNNb2RpZmllZCgncGFzc3dvcmQnKSkgcmV0dXJuIG5leHQoKTtcbiAgICAvLyBoYXNoIHRoZSBwYXNzd29yZCB1c2luZyBvdXIgbmV3IHNhbHRcbiAgICB1c2VyLnBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHVzZXIucGFzc3dvcmQsIGJjcnlwdC5nZW5TYWx0U3luYyg4KSk7XG4gICAgcmV0dXJuIG5leHQoKTtcbn0pO1xuXG51c2VyU2NoZW1hLm1ldGhvZHMudmFsaWRhdGVQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xuICAgIHJldHVybiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xufTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsPElVc2VyPignVXNlcicsIHVzZXJTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9tb2RlbHMvdXNlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzb253ZWJ0b2tlblwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiB0aGUgcG9seWZpbGxzIG11c3QgYmUgdGhlIGZpcnN0IHRoaW5nIGltcG9ydGVkXG4gKi9cbmltcG9ydCAnLi9wb2x5ZmlsbHMudHMnO1xuaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZC50cyc7IC8vIHRlbXBvcmFyeSB1bnRpbCAyLjEuMSB0aGluZ3MgYXJlIHBhdGNoZWQgaW4gQ29yZVxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XG5pbXBvcnQgYXV0aGVudGljYXRlIGZyb20gJy4vc2VydmVyL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcbmltcG9ydCBhdXRoIGZyb20gJy4vc2VydmVyL3JvdXRlcy9hdXRoJztcbmltcG9ydCBwb3N0IGZyb20gJy4vc2VydmVyL3JvdXRlcy9wb3N0JztcbmltcG9ydCBzZXJ2ZXJDb25maWcgZnJvbSAnLi9zZXJ2ZXIvY29uZmlnJztcblxuLy8gQXBwXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xuXG4vKipcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gKi9cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLyoqXG4gKiBFeHByZXNzIFZpZXdcbiAqL1xuYXBwLmVuZ2luZSgnLmh0bWwnLCBjcmVhdGVFbmdpbmUoe30pKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSk7XG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XG5cbi8vIFNldCBuYXRpdmUgcHJvbWlzZXMgYXMgbW9uZ29vc2UgcHJvbWlzZVxuLy8gbW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG4vLyBNb25nb0RCIENvbm5lY3Rpb25cbm1vbmdvb3NlLmNvbm5lY3Qoc2VydmVyQ29uZmlnLm1vbmdvVVJMLCAoZXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIG1ha2Ugc3VyZSBNb25nb2RiIGlzIGluc3RhbGxlZCBhbmQgcnVubmluZyEnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIE1pZGRsZXdhcmVzXG4gKi9cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiAnMjBtYicgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBsaW1pdDogJzIwbWInLCBleHRlbmRlZDogZmFsc2UgfSkpO1xuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpLCB7IGluZGV4OiBmYWxzZSB9KSk7XG5cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuYXBwLnVzZShhdXRoZW50aWNhdGUpO1xuYXBwLnVzZSgnL2FwaScsIGF1dGgpO1xuYXBwLnVzZSgnL2FwaScsIHBvc3QpO1xuXG4vKipcbiAqIGJvb3RzdHJhcCB1bml2ZXJzYWwgYXBwXG4gKiBAcGFyYW0gcmVxXG4gKiBAcGFyYW0gcmVzXG4gKi9cbmZ1bmN0aW9uIG5nQXBwKHJlcTogYW55LCByZXM6IGFueSkge1xuICAgIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgICAgICByZXEsXG4gICAgICAgIHJlcyxcbiAgICAgICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgICAgICBvcmlnaW5Vcmw6IHJlcS5ob3N0bmFtZVxuICAgIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcbiAgICBhcHAuZ2V0KGAvJHtyb3V0ZX0vKmAsIG5nQXBwKTtcbn0pO1xuXG4vKipcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcbiAqL1xuXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgY29uc3QgcG9qbyA9IHsgc3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50JyB9O1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcbn0pO1xuXG5hcHAubGlzdGVuKHNlcnZlckNvbmZpZy5wb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7c2VydmVyQ29uZmlnLnBvcnR9YCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xuXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xufVxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG5pZiAocGF0Y2gpIHtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vX3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhbGVydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcbiAgICBtZXNzYWdlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5nZXRNZXNzYWdlKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4geyB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlOyB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL19kaXJlY3RpdmVzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsImV4cG9ydCAqIGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL19kaXJlY3RpdmVzL2FsZXJ0L2luZGV4LnRzIiwiZXhwb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvX2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkge1xuICAgICAgICAgICAgLy8gbG9nZ2VkIGluIHNvIHJldHVybiB0cnVlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdCBsb2dnZWQgaW4gc28gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSB3aXRoIHRoZSByZXR1cm4gdXJsXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHsgcXVlcnlQYXJhbXM6IHsgcmV0dXJuVXJsOiBzdGF0ZS51cmwgfSB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvX2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBwcml2YXRlIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy8gY2xlYXIgYWxlcnQgbWVzc2FnZSBvbiByb3V0ZSBjaGFuZ2VcbiAgICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGtlZXAgZm9yIGEgc2luZ2xlIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbGVydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh7IHR5cGU6ICdzdWNjZXNzJywgdGV4dDogbWVzc2FnZSB9KTtcbiAgICB9XG5cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IG1lc3NhZ2UgfSk7XG4gICAgfVxuXG4gICAgZ2V0TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL19zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi9fbW9kZWxzL3VzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcblxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvYXV0aCcsIHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NmdWwgaWYgdGhlcmUncyBhIGp3dCB0b2tlbiBpbiB0aGUgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHVzZXIgZGV0YWlscyBhbmQgand0IHRva2VuIGluIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB1c2VyIGxvZ2dlZCBpbiBiZXR3ZWVuIHBhZ2UgcmVmcmVzaGVzXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyByZW1vdmUgdXNlciBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gbG9nIHVzZXIgb3V0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgYWRkUG9zdChvYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3Bvc3QnLCBvYmosIHRoaXMuand0KCkpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbJ19ib2R5J10gPT0gJ1Bvc3QgU3VibWl0dGVkIFN1Y2Nlc3NmdWxseSEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3Bvc3QnLCB0aGlzLmp3dCgpKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc3RzID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChwb3N0cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdHM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgand0KCkge1xuICAgICAgICAvLyBjcmVhdGUgYXV0aG9yaXphdGlvbiBoZWFkZXIgd2l0aCBqd3QgdG9rZW5cbiAgICAgICAgbGV0IGN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSk7XG4gICAgICAgIGlmIChjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50b2tlbikge1xuICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgY3VycmVudFVzZXIudG9rZW4gfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9fc2VydmljZXMvcG9zdC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSBcIm5nMi1tb2RhbFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICduZzItZGF0ZS10aW1lLXBpY2tlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vX2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9fZ3VhcmRzJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlLCBQb3N0U2VydmljZSB9IGZyb20gJy4vX3NlcnZpY2VzJztcbmltcG9ydCB7IE5ld1Bvc3RDb21wb25lbnQgfSBmcm9tICcuL25ld3Bvc3QnO1xuaW1wb3J0IHsgUG9zdHNDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RzJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbic7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXInO1xuXG4vKipcbiAqIFRvcC1sZXZlbCBOZ01vZHVsZSBcImNvbnRhaW5lclwiXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgLyoqIE91ciBDb21wb25lbnRzICovXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQWxlcnRDb21wb25lbnQsXG4gICAgICAgIE5ld1Bvc3RDb21wb25lbnQsXG4gICAgICAgIFBvc3RzQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5PVEU6IE5lZWRzIHRvIGJlIHlvdXIgZmlyc3QgaW1wb3J0ICghKVxuICAgICAgICAgKiBOb2RlTW9kdWxlLCBOb2RlSHR0cE1vZHVsZSwgTm9kZUpzb25wTW9kdWxlIGFyZSBpbmNsdWRlZFxuICAgICAgICAgKi9cbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgICAgIFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIERhdGVUaW1lUGlja2VyTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBBbGVydFNlcnZpY2UsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgUG9zdFNlcnZpY2VcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJleHBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5ld1Bvc3RDb21wb25lbnQgfSBmcm9tICcuL25ld3Bvc3QnO1xuaW1wb3J0IHsgUG9zdHNDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RzJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbic7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9fZ3VhcmRzJztcblxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAncG9zdHMnLCBjb21wb25lbnQ6IFBvc3RzQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcbiAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdyZWdpc3RlcicsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICduZXdwb3N0JywgY29tcG9uZW50OiBOZXdQb3N0Q29tcG9uZW50IH0sXG5cbiAgICAvLyBvdGhlcndpc2UgcmVkaXJlY3QgdG8gaG9tZVxuICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2xvZ2luJyB9XG5dO1xuXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5yb3V0aW5nLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UsIEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbW9kZWw6IGFueSA9IHsgZW1haWw6IFwidGVzdEB1c2VyLmNvbVwiLCBwYXNzd29yZDogXCIxMjNcIiB9O1xuICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICByZXR1cm5Vcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gcmVzZXQgbG9naW4gc3RhdHVzXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8ICcvYWRtaW5EYXNoYm9hcmQnIHx8ICcvdXNlckRhc2hib2FyZCc7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHRoaXMubW9kZWwuZW1haWwsIHRoaXMubW9kZWwucGFzc3dvcmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzQWRtaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nXSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wb3N0cyddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IuX2JvZHkpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9fbW9kZWxzJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSwgUG9zdFNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHN0eWxlVXJsczogWycuL25ld3Bvc3QuY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL25ld3Bvc3QuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTmV3UG9zdENvbXBvbmVudCB7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1cnJlbnRVc2VyOiBVc2VyO1xuICAgIG1vZGVsID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2VcbiAgICApIHtcblxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSk7XG4gICAgfVxuXG4gICAgbmV3cG9zdCgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb3N0U2VydmljZS5hZGRQb3N0KHRoaXMubW9kZWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wb3N0cyddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLl9ib2R5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9uZXdwb3N0L25ld3Bvc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSwgUG9zdFNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHN0eWxlVXJsczogWycuL3Bvc3RzLmNzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wb3N0cy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3N0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgcG9zdHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZVxuICAgICkge1xuXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkUG9zdHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRQb3N0cygpIHtcbiAgICAgICAgdGhpcy5wb3N0U2VydmljZS5nZXRBbGwoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShwb3N0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHBvc3RzO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLl9ib2R5KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IHtcbiAgICBtb2RlbDogYW55ID0ge307XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHsgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kZWwucm9sZSA9ICdVc2VyJztcbiAgICAgICAgLy8gdGhpcy51c2VyU2VydmljZS5jcmVhdGUodGhpcy5tb2RlbClcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJywgdHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5fYm9keSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xuXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxuICpcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAqICdob21lJywgJ2Fib3V0J1xuICogXTtcbiAqKi9cbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdsb2dpbicsICdyZWdpc3RlcicsICdwb3N0cycsICduZXdwb3N0JywgJ2FkbWluJ1xuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwiaW1wb3J0IFBvc3QgZnJvbSAnLi4vbW9kZWxzL3Bvc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3cG9zdChyZXEsIHJlcykge1xuICAgIGxldCBuZXdwb3N0ID0gcmVxLmJvZHk7XG4gICAgUG9zdC5jcmVhdGUobmV3cG9zdCwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdQb3N0IFN1Ym1pdHRlZCBTdWNjZXNzZnVsbHkhJylcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdHMocmVxLCByZXMpIHtcbiAgICBQb3N0LmZpbmQoe30pXG4gICAgICAgIC5leGVjKChlcnI6IEVycm9yLCBwb3N0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0cylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ05vIFBvc3QgRm91bmQhJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2NvbnRyb2xsZXJzL3Bvc3QudHMiLCJpbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgYXV0aG9yaXphdGlvbkhlYWRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gIGxldCB0b2tlbjtcblxuICBpZiAoYXV0aG9yaXphdGlvbkhlYWRlcikge1xuICAgIHRva2VuID0gYXV0aG9yaXphdGlvbkhlYWRlci5zcGxpdCgnICcpWzFdO1xuICB9XG4gIGNvbnNvbGUubG9nKCdhdXRob3JpemF0aW9uSGVhZGVyJywgYXV0aG9yaXphdGlvbkhlYWRlcik7XG4gIGNvbnNvbGUubG9nKCd0b2tlbicsIHRva2VuKTtcblxuICBpZiAodG9rZW4pIHtcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBjb25maWcuand0U2VjcmV0LCAoZXJyLCBkZWNvZGVkKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gYXV0aGVudGljYXRlJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KS5leGVjKChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0aGVudGljYXRlIGVycicsIGVycik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnTm8gc3VjaCB1c2VyJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXEsIHsgY3VycmVudFVzZXI6IHVzZXIgfSk7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBuZXh0KCk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FkbWluKHJlcSwgcmVzLCBuZXh0KSB7XG4gIGlmICghcmVxWydjdXJyZW50VXNlciddKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0xvZyBpbiByZXF1aXJlZC4nIH0pO1xuICB9IGVsc2UgaWYgKHJlcVsnY3VycmVudFVzZXInXS5pc0FkbWluKSB7XG4gICAgbmV4dCgpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdBZG1pbiBhdXRob3JpemF0aW9uIHJlcXVpcmVkLicgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9nZ2VkSW4ocmVxLCByZXMsIG5leHQpIHtcbiAgaWYgKHJlcVsnY3VycmVudFVzZXInXSkge1xuICAgIG5leHQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnTG9nIGluIHJlcXVpcmVkLicgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvbWlkZGxld2FyZS9hdXRoZW50aWNhdGUudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuXG5sZXQgcG9zdFNjaGVtYTogbW9uZ29vc2UuU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHByaWNlOiB7XG4gICAgICAgIHR5cGU6ICdTdHJpbmcnLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnUG9zdCcsIHBvc3RTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9tb2RlbHMvcG9zdC50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8vIGNvbnN0IGFkbWluID0gbmV3IFVzZXIoe1xuLy8gICBlbWFpbDogJ2FkbWluQHJlaS5jb20nLFxuLy8gICBwYXNzd29yZDogJzEyMycsXG4vLyAgIGlzQWRtaW46IHRydWUsXG4vLyAgIGRhdGVBZGRlZDogbmV3IERhdGUoKSxcbi8vIH0pO1xuXG4vLyBhZG1pbi5zYXZlKCk7XG5cbnJvdXRlci5wb3N0KCcvYXV0aCcsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gIGNvbnNvbGUubG9nKCdlbWFpbCcsIGVtYWlsKTtcbiAgY29uc29sZS5sb2coJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xuICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwgfSkuZXhlYygoZXJyLCB1c2VyKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycicsIGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcnM6IHsgZm9ybTogJ0ludmFsaWQgQ3JlZGVudGlhbHMnIH0gfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xuICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnbm8gdXNlcicsIHVzZXIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdObyBzdWNoIHVzZXInIH0pO1xuICAgIH1cbiAgICBpZiAodXNlci52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSkge1xuICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB7XG4gICAgICAgIGlkOiB1c2VyLl9pZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICAgIGlzQWRtaW46IHVzZXIuaXNBZG1pbixcbiAgICAgIH07XG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKGN1cnJlbnRVc2VyLCBjb25maWcuand0U2VjcmV0KTtcbiAgICAgIHJlcVsnY3VycmVudFVzZXInXSA9IGN1cnJlbnRVc2VyO1xuICAgICAgY3VycmVudFVzZXJbJ3Rva2VuJ10gPSB0b2tlbjtcbiAgICAgIHJlcy5qc29uKGN1cnJlbnRVc2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcnM6IHsgZm9ybTogJ0ludmFsaWQgQ3JlZGVudGlhbHMnIH0gfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9hdXRoLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgUG9zdENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvcG9zdCc7XG5cbnZhciByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnL3Bvc3QnLCBQb3N0Q29udHJvbGxlci5wb3N0cyk7XG5cbnJvdXRlci5wb3N0KCcvcG9zdCcsIFBvc3RDb250cm9sbGVyLm5ld3Bvc3QpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9wb3N0LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnJvdyB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9uZXdwb3N0L25ld3Bvc3QuY3NzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI3dyYXBwZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbiN3cmFwcGVyLnRvZ2dsZWQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xcbn1cXG5cXG4jc2lkZWJhci13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYmFja2dyb3VuZDogIzMzN0FCNjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4jd3JhcHBlci50b2dnbGVkICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XFxufVxcblxcbi8qIFNpZGViYXIgU3R5bGVzICovXFxuXFxuLnNpZGViYXItbmF2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgbGkge1xcbiAgICB0ZXh0LWluZGVudDogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbmxpe1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgbGkgYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjOTk5OTk5O1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgbGkgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcXG59XFxuXFxuLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxcbi5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG59XFxuXFxuLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XFxuICAgIGNvbG9yOiAjOTk5OTk5O1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcXG5cXG4gICAgI3dyYXBwZXIudG9nZ2xlZCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgI3NpZGViYXItd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgIH1cXG5cXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuXFxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgfVxcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcXG59XFxuaDF7XFxuICAgIGNvbG9yOiB3aGl0ZVxcbn1cXG4uY2VudGVyZWR7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wb3N0cy9wb3N0cy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJtZXNzYWdlXFxcIiBbbmdDbGFzc109XFxcInsgJ2FsZXJ0JzogbWVzc2FnZSwgJ2FsZXJ0LXN1Y2Nlc3MnOiBtZXNzYWdlLnR5cGUgPT09ICdzdWNjZXNzJywgJ2FsZXJ0LWRhbmdlcic6IG1lc3NhZ2UudHlwZSA9PT0gJ2Vycm9yJyB9XFxcIj57e21lc3NhZ2UudGV4dH19PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvX2RpcmVjdGl2ZXMvYWxlcnQvYWxlcnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8YWxlcnQ+PC9hbGVydD5cXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cXG4gICAgICAgICAgICA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJmLmZvcm0udmFsaWQgJiYgbG9naW4oKVxcXCIgI2Y9XFxcIm5nRm9ybVxcXCIgbm92YWxpZGF0ZT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5FbWFpbCBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhcGFzc3dvcmQudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLnBhc3N3b3JkXFxcIiAjcGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhcGFzc3dvcmQudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5QYXNzd29yZCBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkxvZ2luPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVxcXCJsb2FkaW5nXFxcIiBzcmM9XFxcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBQVFBUElBQVAvLy93QUFBTUxDd2tKQ1FnQUFBR0ppWW9LQ2dwS1NraUgvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoL2hwRGNtVmhkR1ZrSUhkcGRHZ2dZV3BoZUd4dllXUXVhVzVtYndBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTYzUDR3eWtsckUyTUlPZ2dabkFkT21HWUpSYkV4d3JvVW1jRzJMbURFd25IUUxWc1lPZDJtQnprWURBZEthK2RJQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE5BaTYzUDVPakNFZ0c0UU11N0RtaWtSeFFsRlVZREVaSUdCTVJWc2FxSHdjdFhYZjdXRVlCNEFnMXhqaWhrTVpzaVVrS2hJQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6WUl1aklqSzhwQnlKRE1sRll2Qm9WakhBNzBHVTd4U1VKaG1LdHdIUEFLekxPOUhNYW9Ld0paN1JmOEFZUEREektwWkJxZnZ3UUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBek1JdW1JbEs4b3locEhzbkZaZmhZdW1DWVVoREFReFJJZGhIQkdxUm9LdzBSOERZbEpkOHowZk1EZ3NHby9JcEhJNVRBQUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBeklJdW5Jbkswcm5aQlR3R1BOTWdRd21kc05nWEdKVWxJV0V1UjVvV1VJcHo4cEFFQU1lNlR3Znd5WXNHby9JcEZLU0FBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNd2k2SU1LUU9SZmpkT2U4MnA0d0djY2M0Q0V1UXJhZHlsZXNvakVNQmdzVWMyRzdzRFgzbFFHQk1MQUppYnVmYlNsS0FBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNZ2k2M1A3d0NSSFpuRlZkbWdIdTJuRndsV0NJM1dHYzNUU1doVUZHeFRBVWtHQ2J0Z0VOQk1KQUVKc3hnTUxXenBFQUFDSDVCQWtLQUFBQUxBQUFBQUFRQUJBQUFBTXlDTHJjL2pES1NhdGxRdFNjS2RjZUNBakRJSTdIY1E0RU1UQ3B5ckN1VUJqQ1lSZ0hWdHFsQWlCMVloaUNubHNSa0FBQU93QUFBQUFBQUFBQUFBPT1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmVnaXN0ZXInXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCI+UmVnaXN0ZXI8L2E+LS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcbiAgICA8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTFcXFwiPlxcbiAgICAgICAgICAgIDxoMz57e2N1cnJlbnRVc2VyLnVzZXJuYW1lfX08L2gzPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMVxcXCI+XFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wb3N0cyddXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiAyMHB4O1xcXCI+UG9zdHM8L2E+XFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5Mb2dvdXQ8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9uYXY+XFxuXFxuICAgIDxkaXYgaWQ9XFxcInBhZ2UtY29udGVudC13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTYgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPk5ldyBQb3N0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keSBjZW50ZXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImYuZm9ybS52YWxpZCAmJiBuZXdwb3N0KClcXFwiICNmPVxcXCJuZ0Zvcm1cXFwiIG5vdmFsaWRhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICF0aXRsZS52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0aXRsZVxcXCI+VGl0bGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLnRpdGxlXFxcIiAjdGl0bGU9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZi5zdWJtaXR0ZWQgJiYgIXRpdGxlLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+VGl0bGUgaXMgcmVxdWlyZWQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhZGVzY3JpcHRpb24udmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGVzY3JpcHRpb25cXFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5kZXNjcmlwdGlvblxcXCIgI2Rlc2NyaXB0aW9uPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZi5zdWJtaXR0ZWQgJiYgIWRlc2NyaXB0aW9uLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+RGVzY3JpcHRpb24gaXMgcmVxdWlyZWQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhcHJpY2UudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicHJpY2VcXFwiPlByaWNlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwcmljZVxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLnByaWNlXFxcIiAjcHJpY2U9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZi5zdWJtaXR0ZWQgJiYgIXByaWNlLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+UHJpY2UgaXMgcmVxdWlyZWQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5TYXZlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwibG9hZGluZ1xcXCIgc3JjPVxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUFRQVBJQUFQLy8vd0FBQU1MQ3drSkNRZ0FBQUdKaVlvS0NncEtTa2lIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaC9ocERjbVZoZEdWa0lIZHBkR2dnWVdwaGVHeHZZV1F1YVc1bWJ3QWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNd2k2M1A0d3lrbHJFMk1JT2dnWm5BZE9tR1lKUmJFeHdyb1VtY0cyTG1ERXduSFFMVnNZT2QybUJ6a1lEQWRLYStkSUFBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQUROQWk2M1A1T2pDRWdHNFFNdTdEbWlrUnhRbEZVWURFWklHQk1SVnNhcUh3Y3RYWGY3V0VZQjRBZzF4amloa01ac2lVa0toSUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBellJdWpJaks4cEJ5SkRNbEZZdkJvVmpIQTcwR1U3eFNVSmhtS3R3SFBBS3pMTzlITWFvS3dKWjdSZjhBWVBERHpLcFpCcWZ2d1FBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpNSXVtSWxLOG95aHBIc25GWmZoWXVtQ1lVaERBUXhSSWRoSEJHcVJvS3cwUjhEWWxKZDh6MGZNRGdzR28vSXBISTVUQUFBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpJSXVuSW5LMHJuWkJUd0dQTk1nUXdtZHNOZ1hHSlVsSVdFdVI1b1dVSXB6OHBBRUFNZTZUd2Z3eVlzR28vSXBGS1NBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNklNS1FPUmZqZE9lODJwNHdHY2NjNENFdVFyYWR5bGVzb2pFTUJnc1VjMkc3c0RYM2xRR0JNTEFKaWJ1ZmJTbEtBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETWdpNjNQN3dDUkhabkZWZG1nSHUybkZ3bFdDSTNXR2MzVFNXaFVGR3hUQVVrR0NidGdFTkJNSkFFSnN4Z01MV3pwRUFBQ0g1QkFrS0FBQUFMQUFBQUFBUUFCQUFBQU15Q0xyYy9qREtTYXRsUXRTY0tkY2VDQWpESUk3SGNRNEVNVENweXJDdVVCakNZUmdIVnRxbEFpQjFZaGlDbmxzUmtBQUFPd0FBQUFBQUFBQUFBQT09XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL25ld3Bvc3QvbmV3cG9zdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcbiAgICA8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTFcXFwiPlxcbiAgICAgICAgICAgIDxoMz57e2N1cnJlbnRVc2VyLnVzZXJuYW1lIH19PC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTFcXFwiPlxcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3cG9zdCddXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiAyMHB4O1xcXCI+TmV3IFBvc3Q8L2E+XFxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5Mb2dvdXQ8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9uYXY+XFxuXFxuICAgIDxkaXYgaWQ9XFxcInBhZ2UtY29udGVudC13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlBvc3RzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00XFxcIiAqbmdGb3I9XFxcImxldCBwb3N0IG9mIHBvc3RzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHkgY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VGl0bGU6IHt7cG9zdC50aXRsZX19PC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkRlc2NyaXB0aW9uOiB7e3Bvc3QuZGVzY3JpcHRpb259fTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QcmljZToge3twb3N0LnByaWNlfX08L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxuICAgICAgICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cXG4gICAgICAgICAgICA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJmLmZvcm0udmFsaWQgJiYgcmVnaXN0ZXIoKVxcXCIgI2Y9XFxcIm5nRm9ybVxcXCIgbm92YWxpZGF0ZT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhdXNlcm5hbWUudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmZpcnN0TmFtZVxcXCIgI2ZpcnN0TmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFmaXJzdE5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5GaXJzdCBOYW1lIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICF1c2VybmFtZS52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwubGFzdE5hbWVcXFwiICNsYXN0TmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFsYXN0TmFtZS52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkxhc3QgTmFtZSBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhdXNlcm5hbWUudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVxcXCI+VXNlcm5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwudXNlcm5hbWVcXFwiICN1c2VybmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICF1c2VybmFtZS52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlVzZXJuYW1lIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwucGFzc3dvcmRcXFwiICNwYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XFxcImxvYWRpbmdcXFwiIHNyYz1cXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQSUFBUC8vL3dBQUFNTEN3a0pDUWdBQUFHSmlZb0tDZ3BLU2tpSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvaHBEY21WaGRHVmtJSGRwZEdnZ1lXcGhlR3h2WVdRdWFXNW1id0FoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNjNQNHd5a2xyRTJNSU9nZ1puQWRPbUdZSlJiRXh3cm9VbWNHMkxtREV3bkhRTFZzWU9kMm1CemtZREFkS2ErZElBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETkFpNjNQNU9qQ0VnRzRRTXU3RG1pa1J4UWxGVVlERVpJR0JNUlZzYXFId2N0WFhmN1dFWUI0QWcxeGppaGtNWnNpVWtLaElBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpZSXVqSWpLOHBCeUpETWxGWXZCb1ZqSEE3MEdVN3hTVUpobUt0d0hQQUt6TE85SE1hb0t3Slo3UmY4QVlQRER6S3BaQnFmdndRQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6TUl1bUlsSzhveWhwSHNuRlpmaFl1bUNZVWhEQVF4UklkaEhCR3FSb0t3MFI4RFlsSmQ4ejBmTURnc0dvL0lwSEk1VEFBQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6SUl1bkluSzByblpCVHdHUE5NZ1F3bWRzTmdYR0pVbElXRXVSNW9XVUlwejhwQUVBTWU2VHdmd3lZc0dvL0lwRktTQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTZJTUtRT1JmamRPZTgycDR3R2NjYzRDRXVRcmFkeWxlc29qRU1CZ3NVYzJHN3NEWDNsUUdCTUxBSmlidWZiU2xLQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE1naTYzUDd3Q1JIWm5GVmRtZ0h1Mm5Gd2xXQ0kzV0djM1RTV2hVRkd4VEFVa0dDYnRnRU5CTUpBRUpzeGdNTFd6cEVBQUNINUJBa0tBQUFBTEFBQUFBQVFBQkFBQUFNeUNMcmMvakRLU2F0bFF0U2NLZGNlQ0FqRElJN0hjUTRFTVRDcHlyQ3VVQmpDWVJnSFZ0cWxBaUIxWWhpQ25sc1JrQUFBT3dBQUFBQUFBQUFBQUE9PVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPkNhbmNlbDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdC1ub2RlanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiY3J5cHQtbm9kZWpzXCJcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L251bWJlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIlxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3NldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM3L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vcmdhblwiXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItZGF0ZS10aW1lLXBpY2tlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1kYXRlLXRpbWUtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1tb2RhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1tb2RhbFwiXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==