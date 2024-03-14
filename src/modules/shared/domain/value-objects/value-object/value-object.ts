import { BadRequestError } from '../../errors/bad-request-error'

export type Primitives = string | number | boolean | Date

// type Optional<T> = T | undefined | null

export abstract class ValueObject<T extends Primitives> {
  constructor (readonly value: T) {
    this.validateValue(value)
  }

  equals (other: ValueObject<T>): boolean {
    return (
      this.value === other.value ||
      this.constructor.name === other.constructor.name
    )
  }

  toString (): string {
    return this.value.toString()
  }

  private validateValue (value: T): void {
    if (value === undefined || value === null) {
      throw new BadRequestError(this.invalidValueMessage(value))
    }
  }

  invalidValueMessage (value: T): string {
    return `El valor [${value.toString()}] no es un valor válido.`
  }
}
