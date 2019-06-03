import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Lot } from '../../../entities'

export const lotsResolver = {
  async lots(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Lot).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
