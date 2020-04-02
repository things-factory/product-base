import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ProductOptionValue } from '../../../entities'

export const ProductOptionValuesResolver = {
  async productOptionValues(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)

    const [items, total] = await getRepository(ProductOptionValue).findAndCount({
      ...convertedParams,
      relations: ['domain', 'productOption', 'creator', 'updater']
    })

    return { items, total }
  }
}
