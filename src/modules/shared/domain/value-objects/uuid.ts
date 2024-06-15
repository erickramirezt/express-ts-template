import { InvalidUuidError } from '../errors/invalid-uuid-error'
import { StringValueObject } from './string-value-object'

export class Uuid extends StringValueObject {
	constructor(readonly value: string) {
		super(value)
		this.validateUuid({ value })
	}

	static isValid(params: { value: string }): boolean {
		const regexExp =
			/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

		return regexExp.test(params.value)
	}

	private validateUuid(params: { value: string }): void {
		if (!Uuid.isValid({ value: params.value })) {
			throw new InvalidUuidError(params.value)
		}
	}
}
