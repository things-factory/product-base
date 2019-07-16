import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const deleteLot = {
  async deleteLot(_: any, { name }, context: any) {
    return await getRepository(Lot).delete({ domain: context.domain, name })
  }
}
