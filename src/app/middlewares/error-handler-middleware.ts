import { type NextFunction, type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'

function getErrorStatusCode ({ error }: { error: string }): StatusCodes {
  if (error === 'BadRequestError') {
    return StatusCodes.BAD_REQUEST
  }
  if (error === 'NotFoundError') {
    return StatusCodes.NOT_FOUND
  }
  return StatusCodes.INTERNAL_SERVER_ERROR
}

export const errorHandlerMiddleware = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
): void => {
  const errorStatusCode = getErrorStatusCode({ error: error.name })
  res.status(errorStatusCode).json({ error: error.message })
}
