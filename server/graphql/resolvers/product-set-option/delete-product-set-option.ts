import { getRepository } from 'typeorm'
import { ProductSetOption } from '../../../entities'

export const deleteProductSetOption = {
  async deleteProductSetOption(_: any, { name }, context: any) {
    await getRepository(ProductSetOption).delete({ domain: context.state.domain, name })
    return true
  }
}

