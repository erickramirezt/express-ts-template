import { BadRequestError } from './bad-request-error'

export class InvalidStringValueError extends BadRequestError {
	constructor(readonly value: string) {
		super(InvalidStringValueError.message({ value }))
	}

	static message({ value }: { value: string }): string {
		return `El valor [${value}] no es una cadena de texto válida.`
	}
}
