import { getRepository } from 'typeorm'
import { ProductSetOption } from '../../../entities'

export const createProductSetOption = {
  async createProductSetOption(_: any, { productSetOption}, context: any) {
    return await getRepository(ProductSetOption).save({
      ...productSetOption,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

