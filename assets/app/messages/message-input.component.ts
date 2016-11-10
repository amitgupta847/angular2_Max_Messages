import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private msgSrv: MessageService) {

    }

    ngOnInit() {
        this.msgSrv.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }

    onClear(form: NgForm) {
        this.message =null;
        form.resetForm();
    }

    onSubmit(form: NgForm) {
        if (this.message) {
            //edit
            this.message.content = form.value.content;
            this.msgSrv.updateMessage(this.message)
                .subscribe(
                result => console.log(result),
                error => console.log(error)
                );
        } else {
            //create
            //console.log(form);
            const msg = new Message(form.value.content, 'Amit');
            this.msgSrv.addMessage(msg)
                .subscribe(
                data => console.log(data),
                error => console.log(error)
                );
        }



        form.resetForm();
    }


}