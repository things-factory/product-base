import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const createBizplaceProduct = {
  async createBizplaceProduct(_: any, { bizplaceProduct }, context: any) {
    return await getRepository(BizplaceProduct).save({
      domain: context.domain,
      ...bizplaceProduct,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
