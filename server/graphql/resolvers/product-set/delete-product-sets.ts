import { getRepository, In } from 'typeorm'
import { ProductSet } from '../../../entities'

export const deleteProductSets = {
  async deleteProductSets(_: any, { names }, context: any) {
    await getRepository(ProductSet).delete({ 
        domain: context.state.domain,
        name: In(names)
    })
    return true
  }
}

