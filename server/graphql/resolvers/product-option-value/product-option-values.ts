import { getUserBizplaces } from '@things-factory/biz-base'
import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { ProductOptionValue } from '../../../entities'

export const ProductOptionValuesResolver = {
  async ProductOptionValues(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const userBizplaces = await getUserBizplaces(context)
    convertedParams.where.bizplace = In(userBizplaces.map(userBizplace => userBizplace.id))

    const [items, total] = await getRepository(ProductOptionValue).findAndCount({
      ...convertedParams,
      relations: ['domain', 'productOption', 'creator', 'updater']
    })

    return { items, total }
  }
}
