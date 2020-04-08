import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ProductSet } from '../../../entities'

export const productSetsResolver = {
  async productSets(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(ProductSet).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater'],
      order: {
        createdAt: 'ASC'
      }
    })
    return { items, total }
  }
}
