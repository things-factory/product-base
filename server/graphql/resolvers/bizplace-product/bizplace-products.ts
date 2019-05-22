import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const bizplaceProductsResolver = {
  async bizplaceProducts() {
    const repository = getRepository(BizplaceProduct)

    return await repository.find()
  }
}
