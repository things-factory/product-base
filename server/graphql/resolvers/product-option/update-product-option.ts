import { getRepository } from 'typeorm'
import { Product, ProductOption } from '../../../entities'

export const updateProductOption = {
  async updateProductOption(_: any, { id, patch }, context: any) {
    const productOption = await getRepository(ProductOption).findOne({
      domain: context.state.domain,
      id
    })

    return await getRepository(ProductOption).save({
      ...productOption,
      ...patch,
      updater: context.state.user
    })
  }
}
