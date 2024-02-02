import { config } from 'dotenv'

config()

export const SECRET_KEY = process.env.SECRET_KEY ?? '1q2w3e4r5t'
