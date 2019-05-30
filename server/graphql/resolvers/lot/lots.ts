import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const lotsResolver = {
  async lots() {
    const repository = getRepository(Lot)

    return await repository.find()
  }
}
