import { getRepository } from 'typeorm'
import { ProductOptionDetail } from '../../../entities'

export const productOptionDetailsResolver = {
  async productOptionDetails() {
    const repository = getRepository(ProductOptionDetail)

    return await repository.find()
  }
}
