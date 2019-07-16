import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const lotResolver = {
  async lot(_: any, { name }, context: any) {
    return await getRepository(Lot).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'productBatch', 'creator', 'updater']
    })
  }
}
