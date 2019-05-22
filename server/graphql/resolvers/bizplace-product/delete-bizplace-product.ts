import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const deleteBizplaceProduct = {
  async deleteBizplaceProduct(_, { id }) {
    const repository = getRepository(BizplaceProduct)

    return await repository.delete(id)
  }
}
