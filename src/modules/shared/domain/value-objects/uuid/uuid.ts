import { InvalidUuidError } from './invalid-uuid-error'

export class Uuid {
  constructor (readonly value: string) {
    if (!this.isValid(value)) {
      throw new InvalidUuidError(value)
    }
  }

  private isValid (value: string): boolean {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

    return regexExp.test(value)
  }
}
