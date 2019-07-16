import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const bizplaceProductResolver = {
  async bizplaceProduct(_: any, { name }, context: any) {
    return await getRepository(BizplaceProduct).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
