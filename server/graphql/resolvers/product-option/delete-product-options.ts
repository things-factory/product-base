import { getRepository, In } from 'typeorm'
import { ProductOption, ProductOptionValue } from '../../../entities'

export const deleteProductOptions = {
  async deleteProductOptions(_: any, { ids }) {
    //delete child data
    await getRepository(ProductOptionValue).delete({
      productOption: In(ids)
    })

    //delete main data
    await getRepository(ProductOption).delete({
      id: In(ids)
    })

    return true
  }
}
