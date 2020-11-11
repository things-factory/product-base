import { getMyBizplace } from '@things-factory/biz-base'
import { Domain } from 'domain'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Product } from '../../../entities'

export const createProductResolver = {
  async createProduct(_: any, { product }, context: any) {
    return await createProduct(product, context.state.domain, context.state.user)
  },
}

export async function createProduct(product: Product, domain: Domain, user: any, trxMgr?: EntityManager) {
  const repository: Repository<Product> = trxMgr ? trxMgr.getRepository(Product) : getRepository(Product)
  if (product?.productRef?.id) {
    product.productRef = await repository.findOne(product.productRef.id)
  }
  if (product?.parentProductRef?.id) {
    product.parentProductRef = await repository.findOne(product.parentProductRef.id)
  }

  return await repository.save({
    ...product,
    domain,
    bizplace: await getMyBizplace(user),
    creator: user,
    updater: user,
  })
}
