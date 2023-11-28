import { type NextFunction, type Request, type Response } from 'express'

export type Controller = (_: Request, res: Response, next: NextFunction) => void
