import { EventEmitter } from "@angular/core";
import { Error } from "./error.model";
export var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (errordata) {
        var errorData = new Error(errordata.title, errordata.error.message);
        this.errorOccurred.emit(errorData);
    };
    return ErrorService;
}());
//# sourceMappingURL=error.service.js.map