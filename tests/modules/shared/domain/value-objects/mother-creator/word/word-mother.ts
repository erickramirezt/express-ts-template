import { MotherCreator } from '../mother-creator'

export const WordMother = {
  random ({ max, min = 1 }: { min?: number, max: number }) {
    return MotherCreator.word({ max, min })
  }
}
