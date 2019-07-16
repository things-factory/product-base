import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const updateLot = {
  async updateLot(_: any, { name, patch }, context: any) {
    const repository = getRepository(Lot)
    const lot = await repository.findOne({ domain: context.domain, name })

    return await repository.save({
      ...lot,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
