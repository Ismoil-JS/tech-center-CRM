export const ValidationMiddleware = schema => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body)

        if (error) {
            return res.status(400).json({ message: error.message })
        }
        else {
            req.body = value
            next()
        }

    }
}
