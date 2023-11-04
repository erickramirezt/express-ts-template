import { type Application } from 'express'
import { API_BASE_URL } from '../constants/api-routes'
import { getStatus } from '../controllers/status'

export const loadApiEndpoints = (app: Application): void => {
  app.get(API_BASE_URL, getStatus)
}
