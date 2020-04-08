import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { ProductOption } from '../../../entities'

export const productOptionsResolver = {
  async productOptions(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    convertedParams.where.bizplace = In(await getPermittedBizplaceIds(context.state.domain, context.state.user))

    const [items, total] = await getRepository(ProductOption).findAndCount({
      ...convertedParams,
      relations: ['productOptionValues', 'domain', 'bizplace', 'creator', 'updater']
    })

    return { items, total }
  }
}
