import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { Product } from '../../../entities'

export const updateProduct = {
  async updateProduct(_: any, { id, patch }, context: any) {
    const product = await getRepository(Product).findOne({
      domain: context.state.domain,
      id,
      bizplace: In(await getPermittedBizplaceIds(context.state.domain, context.state.user))
    })
    return await getRepository(Product).save({
      ...product,
      ...patch,
      updater: context.state.user
    })
  }
}
