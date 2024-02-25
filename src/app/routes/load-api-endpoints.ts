import { type Application } from 'express'
import { BASE_API_ROUTE } from '../constants'
import { statusRouter } from './routers'

export const loadApiEndpoints = (app: Application): void => {
  app.use(BASE_API_ROUTE, statusRouter)
}
