/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from "ng2-modal";
import { DateTimePickerModule } from 'ng2-date-time-picker';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { AlertService, AuthenticationService, PostService } from './_services';
import { NewPostComponent } from './newpost';
import { PostsComponent } from './posts';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

/**
 * Top-level NgModule "container"
 */
@NgModule({
    /** Root App Component */
    bootstrap: [AppComponent],
    /** Our Components */
    declarations: [
        AppComponent,
        AlertComponent,
        NewPostComponent,
        PostsComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        /**
         * NOTE: Needs to be your first import (!)
         * NodeModule, NodeHttpModule, NodeJsonpModule are included
         */
        UniversalModule,
        FormsModule,
        HttpModule,
        ModalModule,
        RoutingModule,
        DateTimePickerModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        PostService
    ],
})
export class AppModule {

}
