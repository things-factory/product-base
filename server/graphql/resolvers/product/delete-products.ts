import { getPermiitedBizplaceIds } from '@things-factory/biz-base'
import { getRepository, In } from 'typeorm'
import { Product } from '../../../entities'

export const deleteProducts = {
  async deleteProducts(_: any, { ids }, context: any) {
    await getRepository(Product).delete({
      id: In(ids),
      bizplace: In(await getPermiitedBizplaceIds(context.state.domain, context.state.user))
    })

    return true
  }
}
