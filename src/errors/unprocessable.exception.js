import { BaseException } from "./base.exception.js"

export class UnprocessableException extends BaseException {
    constructor({ message, details }) {
        super()
        this.message = message
        this.status = 422
        this.exception = 'UnprocessableException'
        this.details = details
    }
}
