import { Component } from "@angular/core";
import { MessageService } from "./message.service";
export var MessageListComponent = (function () {
    function MessageListComponent(msgSrv) {
        this.msgSrv = msgSrv;
    }
    MessageListComponent.prototype.getMessages = function () {
        var _this = this;
        this.msgSrv.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessageListComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-list',
                    template: "\n       <div class=\"col-md-8 col-md-offset-2\">\n         <app-message *ngFor=\"let mes of messages\" [message]=\"mes\">\n         </app-message>\n       </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessageListComponent.ctorParameters = [
        { type: MessageService, },
    ];
    return MessageListComponent;
}());
//# sourceMappingURL=message-list.component.js.map