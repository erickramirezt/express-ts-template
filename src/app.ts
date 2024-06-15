import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'

import { errorHandlerMiddleware } from './app/shared/middlewares/error-handler-middleware'
import { notFoundHandlerMiddleware } from './app/shared/middlewares/not-found-handler-middleware'
import { loadApiEndpoints } from './app/shared/routes/load-api-endpoints'

const app = express()

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100
})

app.set('port', process.env.PORT ?? 3000)
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(limiter)
app.use(express.urlencoded({ extended: true }))

loadApiEndpoints(app)

app.use(notFoundHandlerMiddleware)
app.use(errorHandlerMiddleware)

export default app
