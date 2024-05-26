import { InternalServerError } from './internal-server-error'

export class InvalidUuidError extends InternalServerError {
	constructor(readonly value: string) {
		super(InvalidUuidError.message({ value }))
	}

	static message({ value }: { value: string }): string {
		return `El valor [${value}] no es un UUID válido.`
	}
}
