import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { PORT } from './config/app.config.js'
import routes from './route/routes.js'
import { NotFoundException } from './errors/not-found.exception.js'
import { ErrorHandlerMiddleware } from './middleware/error-handler.middleware.js'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src', 'views'))

app.use('/assets', express.static(path.join(process.cwd(), 'src', 'public')))
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', routes)
app.use('/*', (req, _) => {
    throw new NotFoundException(`${req.url} not found`)
})
app.use(ErrorHandlerMiddleware)

app.listen(PORT, () => {
    console.log(PORT)
})
