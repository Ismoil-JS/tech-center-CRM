export class BaseException extends Error {
    constructor(message) {
        super()
        this.message = message
    }
}
