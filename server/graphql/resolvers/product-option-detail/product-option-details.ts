import { buildQuery, ListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ProductOptionDetail } from '../../../entities'

export const productOptionDetailsResolver = {
  async productOptionDetails(_: any, params: ListParams, context: any) {
    const queryBuilder = getRepository(ProductOptionDetail).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
