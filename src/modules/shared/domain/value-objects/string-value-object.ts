import { InvalidStringValueError } from '../errors/invalid-string-value-error'
import { ValueObject } from './value-object'

export abstract class StringValueObject extends ValueObject<string> {
	constructor(readonly value: string) {
		super(value)
		this.validateString({ value })
	}

	static isValid(params: { value: string }): boolean {
		return typeof params.value === 'string'
	}

	private validateString(params: { value: string }): void {
		if (!StringValueObject.isValid({ value: params.value })) {
			throw new InvalidStringValueError(params.value)
		}
	}
}
