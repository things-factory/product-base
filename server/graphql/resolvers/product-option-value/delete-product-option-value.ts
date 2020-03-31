import { getRepository } from 'typeorm'
import { ProductOption, ProductOptionValue } from '../../../entities'

export const deleteProductOptionValue = {
  async deleteProductOptionValue(_: any, { id }) {
    await getRepository(ProductOptionValue).delete({
      id
    })
    return true
  }
}
