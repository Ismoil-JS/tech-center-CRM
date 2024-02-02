import { config } from 'dotenv'

config()

export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 9000
