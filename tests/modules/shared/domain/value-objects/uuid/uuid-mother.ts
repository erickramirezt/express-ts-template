import { Uuid } from '../../../../../../src/modules/shared/domain/value-objects/uuid/uuid'
import { MotherCreator } from '../mother-creator/mother-creator'
import { WordMother } from '../mother-creator/word/word-mother'

export const UuidMother = {
  create (value: string) {
    return new Uuid(value)
  },

  random () {
    return this.create(MotherCreator.uuid())
  },

  invalidUuid () {
    return WordMother.random({ max: 10 })
  }
}
