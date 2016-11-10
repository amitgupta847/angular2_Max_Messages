import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {}

    herokudomain = 'https://angular2-max-messages.herokuapp.com/';
    otherwise = 'http://localhost:3000';

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.herokudomain + '/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((theError: Response) => {
                this.errorService.handleError(theError.json());
                return Observable.throw(theError.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.herokudomain + '/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((theError: Response) => {
                this.errorService.handleError(theError.json());
                return Observable.throw(theError.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}