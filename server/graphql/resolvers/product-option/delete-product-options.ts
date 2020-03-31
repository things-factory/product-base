import { getRepository, In } from 'typeorm'
import { Product, ProductOption } from '../../../entities'

export const deleteProductOptions = {
  async deleteProductOptions(_: any, { ids }) {
    await getRepository(ProductOption).delete({
      id: In(ids)
    })

    return true
  }
}
