import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    template: `
       <div class="col-md-8 col-md-offset-2">
         <app-message *ngFor="let mes of messages" [message]="mes">
         </app-message>
       </div>
    `
})
export class MessageListComponent {
    messages: Message[];

    constructor(private msgSrv: MessageService) {
    }

    getMessages() {
        this.msgSrv.getMessages()
            .subscribe(
            (messages: Message[]) => {
                this.messages = messages;
            }
            );
    }

    ngOnInit() {
        this.getMessages();
    }
}

//(editClicked)="message.content= $event"