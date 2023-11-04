import express from 'express'
import cors from 'cors'
import { loadApiEndpoints } from './routes/api'
import { errorHandler, notFound } from './middlewares'

const app = express()

app.set('port', process.env.PORT ?? 3000)
app.use(express.json())
app.use(cors())

loadApiEndpoints(app)

app.use(notFound)
app.use(errorHandler)

export default app
