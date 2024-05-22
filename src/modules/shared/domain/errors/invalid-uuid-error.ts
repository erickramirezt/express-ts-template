import { InternalServerError } from './internal-server-error'

export class InvalidUuidError extends InternalServerError {
	static message ({ value }: { value: string }) {
		return `El valor [${value}] no es un UUID válido.`
	} 
	constructor(readonly value: string) {
		super(InvalidUuidError.message({ value }))
	}
}
