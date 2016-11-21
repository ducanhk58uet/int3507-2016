/**
 * Created by Thinking on 09/13/2016.
 */
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
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loggedIn = false;
        this.msg_error = "";
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    LoginComponent.prototype.actionLogin = function (username, password) {
        var _this = this;
        this.msg_error = "";
        this.loginService.loginRequest(username, password)
            .subscribe(function (res) {
            if (res) {
                localStorage.setItem('auth_token', res.data.access_token);
                location.reload();
            }
        }, function (err) {
            if (err)
                _this.msg_error = "Invalid username or password";
        });
    };
    LoginComponent.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.isLoggedIn()) {
            this.router.navigate(['']);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/login/login.component.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map