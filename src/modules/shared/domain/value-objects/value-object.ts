import { InvalidValueError } from '../errors/invalid-value-error'

export type Primitives = string | number | boolean | Date
type Optional<T> = T | undefined | null

export abstract class ValueObject<T extends Primitives> {
	constructor(readonly value: T) {
		this.validateValue({ value })
	}

	equals(params: { other: ValueObject<T> }): boolean {
		return (
			params.other.constructor.name === this.constructor.name && params.other.value === this.value
		)
	}

	toString(): string {
		return this.value.toString()
	}

	private validateValue(params: { value: T }): void {
		if (!this.isValueValid({ value: params.value })) {
			throw new InvalidValueError(String(params.value))
		}
	}

	private isValueValid(params: { value: Optional<T> }): boolean {
		return params.value !== undefined && params.value !== null
	}
}
