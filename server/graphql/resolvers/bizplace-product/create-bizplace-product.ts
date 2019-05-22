import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const createBizplaceProduct = {
  async createBizplaceProduct(_, { bizplaceProduct: attrs }) {
    const repository = getRepository(BizplaceProduct)
    const newBizplaceProduct = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newBizplaceProduct)
  }
}
