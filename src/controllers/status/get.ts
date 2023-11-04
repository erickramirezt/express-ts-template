import { type Response, type NextFunction, type Request } from 'express'
import { StatusCodes } from 'http-status-codes'

export const getStatus = (
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.status(StatusCodes.OK).send()
  } catch (error) {
    next(error)
  }
}
