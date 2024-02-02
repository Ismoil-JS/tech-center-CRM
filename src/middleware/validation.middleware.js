import { UnprocessableException } from "../errors/unprocessable.exception.js"

export const ValidationMiddleware = schema => {
    return (req, _, next) => {
        const { error, value } = schema.validate(req.body)

        if (error) {
            throw new UnprocessableException({
                message: error.message,
                details: error.details
            })
        }

        req.body = value
        next()
    }
}
