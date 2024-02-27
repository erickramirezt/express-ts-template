import { faker } from '@faker-js/faker'

export const MotherCreator = {
  uuid () {
    return faker.string.uuid()
  },
  word ({ max, min = 1 }: { min?: number, max: number }) {
    return faker.word.sample({ length: { max, min } })
  }
}
