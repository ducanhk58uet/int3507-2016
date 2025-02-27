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
var router_1 = require("@angular/router");
var user_service_1 = require("../user/user.service");
/**
 * Created by Thinking on 10/29/2016.
 */
var ProfileComponent = (function () {
    function ProfileComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loggedIn = false;
        this.msg_error = "";
        this.msg_success = "";
        this.loggedIn = !!localStorage.getItem('auth_token');
        if (this.loggedIn) {
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ProfileComponent.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    ProfileComponent.prototype.loadExamData = function () {
        var _this = this;
        this.userService.getExam(localStorage.getItem('auth_token'))
            .subscribe(function (data) {
            _this.exams = data;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        if (this.isLoggedIn()) {
            this.loadExamData();
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/profile/profile.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map