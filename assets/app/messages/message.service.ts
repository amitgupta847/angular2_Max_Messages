import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    herokudomain = 'https://angular2-max-messages.herokuapp.com/';
    otherwise = 'http://localhost:3000';
    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.herokudomain + '/message' + token, body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(
                    result.obj.content,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.messages.push(message);
                return message;
            })
            .catch((theError: Response) => {
                this.errorService.handleError(theError.json());
                return Observable.throw(theError.json());
            });
    }

    getMessages() {
        return this.http.get(this.herokudomain + '/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id)
                    );
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((theError: Response) => {
                this.errorService.handleError(theError.json());
                return Observable.throw(theError.json());
            });
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(this.herokudomain + '/message/' + message.messageId + token, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((theError: Response) => {
                this.errorService.handleError(theError.json());
                return Observable.throw(theError.json());
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.herokudomain + '/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((theError: Response) => {
                this.errorService.handleError(theError.json());
                return Observable.throw(theError.json());
            });
    }
}