import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { ErrorComponent } from "./errors/error.component";
import { MessageModule } from "./messages/message.module";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";
import { routing } from "./app.routing";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        AuthenticationComponent,
                        HeaderComponent,
                        ErrorComponent
                    ],
                    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule,
                        HttpModule, MessageModule],
                    bootstrap: [AppComponent],
                    providers: [AuthService, ErrorService]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map