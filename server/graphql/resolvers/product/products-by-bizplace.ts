import { Bizplace } from '@things-factory/biz-base'
import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { Product } from '../../../entities'

export const productsByBizplaceResolver = {
  async productsByBizplace(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)

    const [items, total] = await getRepository(Product).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizplace', 'productRef', 'creator', 'updater']
    })

    return { items, total }
  }
}
