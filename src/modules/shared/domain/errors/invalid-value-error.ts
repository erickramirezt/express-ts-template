import { BadRequestError } from './bad-request-error'

export class InvalidValueError extends BadRequestError {
  static message({ value }: { value: string }) {
    return `El valor [${value}] no es válido.`
  }
  constructor(readonly value: string) {
    super(InvalidValueError.message({ value }))
  }
}
