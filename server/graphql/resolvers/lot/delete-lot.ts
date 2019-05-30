import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const deleteLot = {
  async deleteLot(_, { id }) {
    const repository = getRepository(Lot)

    return await repository.delete(id)
  }
}
