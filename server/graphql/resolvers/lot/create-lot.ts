import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const createLot = {
  async createLot(_, { lot: attrs }) {
    const repository = getRepository(Lot)
    const newLot = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newLot)
  }
}
