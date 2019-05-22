import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const bizplaceProductResolver = {
  async bizplaceProduct(_, { id }, context, info) {
    const repository = getRepository(BizplaceProduct)

    return await repository.findOne(
      { id }
    )
  }
}
