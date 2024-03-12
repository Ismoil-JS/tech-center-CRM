import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { PORT } from './config/app.config.js'
import routes from './route/routes.js'
import { ErrorHandlerMiddleware } from './middleware/errorHandler.middleware.js'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src', 'views'))

app.use('/assets', express.static(path.join(process.cwd(), 'src', 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', routes)
app.use('/*', (_, res) => {
    return res.json({
        message: `Error with routing`
    })
})
app.use(ErrorHandlerMiddleware)

app.listen(PORT)
