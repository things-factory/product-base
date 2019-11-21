import { getMyBizplace } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { Product } from '../../../entities'

export const createProduct = {
  async createProduct(_: any, { product }, context: any) {
    if (product.productRef && product.productRef.id)
      product.productRef = await getRepository(Product).findOne(product.productRef.id)
    return await getRepository(Product).save({
      ...product,
      domain: context.state.domain,
      bizplace: await getMyBizplace(context.state.user),
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
