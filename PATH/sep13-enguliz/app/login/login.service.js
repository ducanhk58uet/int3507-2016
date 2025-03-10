"use strict";
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
 * Created by Thinking on 09/19/2016.
 */
require('rxjs/Rx');
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var appSettings_1 = require("../appSettings");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = ("" + appSettings_1.AppSettings.API_ENDPOINT) + "/user/login?";
        this.logoutUrl = ("" + appSettings_1.AppSettings.API_ENDPOINT) + "/user/logout?";
    }
    LoginService.prototype.loginRequest = function (username, password) {
        return this.http.get(this.loginUrl + "username=" + username + "&password=" + password)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    LoginService.prototype.logoutRequest = function (auth_token) {
        var headers = {
            access_token: auth_token
        };
        return this.http.get(this.logoutUrl, headers)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map