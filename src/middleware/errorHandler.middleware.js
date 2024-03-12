export const ErrorHandlerMiddleware = (err, req, res, next) => {
    if (err.exception) {
        return res.status(err.status).json({
            message: err.message
        })
    }

    return res.status(500).json({
        message: "Internal Server Error"
    })
}
