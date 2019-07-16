import { getRepository } from 'typeorm'
import { Product } from '../../../entities'

export const createProduct = {
  async createProduct(_: any, { product }, context: any) {
    return await getRepository(Product).save({
      domain: context.domain,
      ...product,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
