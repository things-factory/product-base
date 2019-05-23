import { getRepository } from 'typeorm'
import { ProductOption } from '../../../entities'

export const productOptionsResolver = {
  async productOptions() {
    const repository = getRepository(ProductOption)

    return await repository.find()
  }
}
