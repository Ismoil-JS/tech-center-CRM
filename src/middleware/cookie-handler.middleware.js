import { verify } from "../helpers/jwt.helper.js"


export const accessMiddleware = (req, res, next) => {

    const { accessToken } = req.cookies;
    if (!accessToken) {
        return res.status(401).json({ message: "Token not found" })
    }

    const { id } = verify(accessToken);

    req.body.id = id;

    next();
}