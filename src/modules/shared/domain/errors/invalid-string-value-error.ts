import { BadRequestError } from './bad-request-error'

export class InvalidStringValueError extends BadRequestError {
	constructor(readonly value: string) {
		super(InvalidStringValueError.message({ value }))
	}

	static message(params: { value: string }): string {
		return `El valor [${params.value}] no es una cadena de texto válida.`
	}
}
