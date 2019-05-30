import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const updateLot = {
  async updateLot(_, { id, patch }) {
    const repository = getRepository(Lot)

    const lot = await repository.findOne({ id })

    return await repository.save({
      ...lot,
      ...patch
    })
  }
}
