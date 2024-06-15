import { BadRequestError } from './bad-request-error'

export class InvalidValueError extends BadRequestError {
	constructor(readonly value: string) {
		super(InvalidValueError.message({ value }))
	}

	static message(params: { value: string }): string {
		return `El valor [${params.value}] no es válido.`
	}
}
