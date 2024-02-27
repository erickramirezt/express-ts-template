import { InternalServerError } from '../../errors/internal-server-error'

export class InvalidUuidError extends InternalServerError {
  constructor (value: string) {
    super(InvalidUuidError.message(value))
    this.name = 'InvalidUuidError'
  }

  static message (value: string): string {
    return `El valor [${value}] no es un UUID válido`
  }
}
