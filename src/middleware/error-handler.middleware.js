export const ErrorHandlerMiddleware = (err, _, res, __) => {
    console.log(err);
    if (err.exception) {
        return res.status(err.status).json({
            message: err.message
        })
    }

    return res.status(500).json({
        message: "Internal Server Error"
    })
}
