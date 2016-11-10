import { EventEmitter } from "@angular/core";

import { Error } from "./error.model";

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(errordata: any) {
        const errorData = new Error(errordata.title, errordata.error.message);
        this.errorOccurred.emit(errorData);
    }
}