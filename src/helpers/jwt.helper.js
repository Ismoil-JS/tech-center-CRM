import jwt from 'jsonwebtoken'

export const sign = payload => jwt.sign(payload, process.env.SECRET_KEY)
export const verify = token => jwt.verify(token, process.env.SECRET_KEY)
