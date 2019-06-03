import { buildQuery, ListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const bizplaceProductsResolver = {
  async bizplaceProducts(_: any, params: ListParams, context: any) {
    const queryBuilder = getRepository(BizplaceProduct).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
