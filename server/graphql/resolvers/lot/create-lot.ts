import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const createLot = {
  async createLot(_: any, { lot }, context: any) {
    return await getRepository(Lot).save({
      domain: context.domain,
      ...lot,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
