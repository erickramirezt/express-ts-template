import { type Application } from 'express'

import { statusRouter } from '../../status/routers/status-router'

export const baseApiRoute = '/api-backend'

export const loadApiEndpoints = (app: Application): void => {
	app.use(baseApiRoute, statusRouter)
}
