import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const lotResolver = {
  async lot(_, { id }, context, info) {
    const repository = getRepository(Lot)

    return await repository.findOne(
      { id },
      {
        relations: ['lotDetails']
      }
    )
  }
}
