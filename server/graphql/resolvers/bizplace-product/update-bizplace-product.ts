import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const updateBizplaceProduct = {
  async updateBizplaceProduct(_: any, { name, patch }, context: any) {
    const repository = getRepository(BizplaceProduct)
    const bizplaceProduct = await repository.findOne({ domain: context.domain, name })

    return await repository.save({
      ...bizplaceProduct,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
