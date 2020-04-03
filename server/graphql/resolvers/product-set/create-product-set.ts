import { getRepository } from 'typeorm'
import { ProductSet } from '../../../entities'

export const createProductSet = {
  async createProductSet(_: any, { productSet}, context: any) {
    return await getRepository(ProductSet).save({
      ...productSet,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

