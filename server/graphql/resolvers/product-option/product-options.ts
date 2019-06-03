import { buildQuery, ListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ProductOption } from '../../../entities'

export const productOptionsResolver = {
  async productOptions(_: any, params: ListParams, context: any) {
    const queryBuilder = getRepository(ProductOption).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
