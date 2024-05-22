import { BadRequestError } from './bad-request-error'

export class InvalidStringValueError extends BadRequestError {
  static message({ value }: { value: string }) {
    return `El valor [${value}] no es una cadena de texto válida.`
  }
  constructor(readonly value: string) {
    super(InvalidStringValueError.message({value}))
  }
}
