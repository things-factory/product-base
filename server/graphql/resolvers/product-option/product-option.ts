import { getRepository } from 'typeorm'
import { ProductOption } from '../../../entities'

export const productOptionResolver = {
  async productOption(_: any, { id }, context: any) {
    return await getRepository(ProductOption).findOne({
      where: { domain: context.state.domain, id },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
