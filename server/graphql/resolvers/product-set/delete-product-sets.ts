import { getRepository, In } from 'typeorm'
import { ProductSet } from '../../../entities'

export const deleteProductSets = {
  async deleteProductSets(_: any, { ids }, context: any) {
    await getRepository(ProductSet).delete({
      domain: context.state.domain,
      id: In(ids)
    })
    return true
  }
}
