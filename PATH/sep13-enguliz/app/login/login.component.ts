/**
 * Created by Thinking on 09/13/2016.
 */

import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/login/login.component.html',
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    private loggedIn = false;

    constructor(private loginService: LoginService, private router: Router){
        this.loggedIn = !!localStorage.getItem('auth_token');

    }

    public msg_error = "";


    actionLogin(username, password) {
        this.msg_error = "";
        this.loginService.loginRequest(username, password)
            .subscribe(res => {
                if(res) {
                    localStorage.setItem('auth_token', res.data.access_token);
                    location.reload();
                }
            }, err => {
                if(err) this.msg_error = "Invalid username or password";
            });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    ngOnInit() {
        if (this.isLoggedIn()) {
            this.router.navigate(['']);
        }
    }

}