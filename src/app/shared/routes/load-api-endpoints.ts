import { type Application } from 'express'

import { statusRouter } from '../../status/routers/status-router'
import { baseApiRoute } from './routes'

export const loadApiEndpoints = (app: Application): void => {
	app.use(baseApiRoute, statusRouter)
}
