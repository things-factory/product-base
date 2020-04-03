import { getRepository } from 'typeorm'
import { ProductSet } from '../../../entities'

export const deleteProductSet = {
  async deleteProductSet(_: any, { name }, context: any) {
    await getRepository(ProductSet).delete({ domain: context.state.domain, name })
    return true
  }
}

