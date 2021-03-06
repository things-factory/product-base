import { getRepository } from 'typeorm'
import { ProductOption } from '../../../entities'

export const createProductOption = {
  async createProductOption(_: any, { productOption }, context: any) {
    return await getRepository(ProductOption).save({
      ...productOption,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
