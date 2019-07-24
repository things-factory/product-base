import { getRepository } from 'typeorm'
import { Product } from '../../../entities'
import { Company } from '@things-factory/biz-base'

export const createProduct = {
  async createProduct(_: any, { product }, context: any) {
    return await getRepository(Product).save({
      domain: context.domain,
      ...product,
      company: await getRepository(Company).findOne({ where: { name: product.company } }),
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
