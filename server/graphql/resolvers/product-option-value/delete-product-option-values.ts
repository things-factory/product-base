import { getRepository, In } from 'typeorm'
import { ProductOption, ProductOptionValue } from '../../../entities'

export const deleteProductOptionValues = {
  async deleteProductOptionValues(_: any, { ids }) {
    await getRepository(ProductOptionValue).delete({
      id: In(ids)
    })

    return true
  }
}
