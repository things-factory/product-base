import { getRepository } from 'typeorm'
import { Product, ProductOption } from '../../../entities'

export const deleteProductOption = {
  async deleteProductOption(_: any, { id }) {
    await getRepository(ProductOption).delete({
      id
    })
    return true
  }
}
