/**
 * Created by Thinking on 09/13/2016.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {routing, appRoutingProvider} from "./app.routing";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {TheoryListenComponent} from "./theory/listen.component";
import {TheoryComponent} from "./theory/theory.component";
import {HttpModule, JsonpModule} from "@angular/http";
import {TestComponent} from "./test/test.component";
import {TestReadCompoent} from "./test/read/test.component";
import {DetailComponent} from "./detail/detail.component";
import {RegisterComponent} from "./login/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {GrammarComponent} from "./grammar/grammar.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        TheoryComponent,
        TheoryListenComponent,
        TestComponent,
        TestReadCompoent,
        DetailComponent,
        RegisterComponent,
        ProfileComponent,
        GrammarComponent
    ],
    providers: [
        appRoutingProvider
    ],
    bootstrap: [
        AppComponent,
    ]
})

export class AppModule { }