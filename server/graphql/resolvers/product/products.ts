import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { Product } from '../../../entities'

export const productsResolver = {
  async products(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    convertedParams.where.bizplace = In(await getPermittedBizplaceIds(context.state.domain, context.state.user))

    const [items, total] = await getRepository(Product).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizplace', 'productRef', 'creator', 'updater']
    })

    return { items, total }
  }
}
