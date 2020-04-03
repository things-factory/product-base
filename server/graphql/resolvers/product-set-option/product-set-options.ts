import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ProductSetOption } from '../../../entities'

export const productSetOptionsResolver = {
  async productSetOptions(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(ProductSetOption).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  }
}