import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const lotsResolver = {
  async lots(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Lot).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Lot.domain', 'Domain')
      .leftJoinAndSelect('Lot.productBatch', 'ProductBatch')
      .leftJoinAndSelect('Lot.creator', 'Creator')
      .leftJoinAndSelect('Lot.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
