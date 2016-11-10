import { Component } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
export var MessageInputComponent = (function () {
    function MessageInputComponent(msgSrv) {
        this.msgSrv = msgSrv;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgSrv.messageIsEdit.subscribe(function (message) { return _this.message = message; });
    };
    MessageInputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.resetForm();
    };
    MessageInputComponent.prototype.onSubmit = function (form) {
        if (this.message) {
            //edit
            this.message.content = form.value.content;
            this.msgSrv.updateMessage(this.message)
                .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        }
        else {
            //create
            //console.log(form);
            var msg = new Message(form.value.content, 'Amit');
            this.msgSrv.addMessage(msg)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        }
        form.resetForm();
    };
    MessageInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-input',
                    templateUrl: './message-input.component.html'
                },] },
    ];
    /** @nocollapse */
    MessageInputComponent.ctorParameters = [
        { type: MessageService, },
    ];
    return MessageInputComponent;
}());
//# sourceMappingURL=message-input.component.js.map