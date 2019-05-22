import { getRepository } from 'typeorm'
import { Product } from '../../../entities'

export const productsResolver = {
  async products() {
    const repository = getRepository(Product)

    return await repository.find()
  }
}
