import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const updateBizplaceProduct = {
  async updateBizplaceProduct(_, { id, patch }) {
    const repository = getRepository(BizplaceProduct)

    const bizplaceProduct = await repository.findOne({ id })

    return await repository.save({
      ...bizplaceProduct,
      ...patch
    })
  }
}
