import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { Product } from '../../../entities'

export const deleteProduct = {
  async deleteProduct(_: any, { id }, context: any) {
    await getRepository(Product).delete({
      id,
      bizplace: In(await getPermittedBizplaceIds(context.state.domain, context.state.user))
    })
  }
}
