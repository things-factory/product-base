import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const createLot = {
  async createLot(_: any, { lot }, context: any) {
    return await getRepository(Lot).save({
      domain: context.domain,
      ...lot,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
