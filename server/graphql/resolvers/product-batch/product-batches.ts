import { getRepository } from 'typeorm'
import { ProductBatch } from '../../../entities'
import { ListParams, buildQuery } from '@things-factory/shell'

export const productBatchesResolver = {
  async productBatches(_: any, params: ListParams, context: any) {
    const queryBuilder = getRepository(ProductBatch).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
