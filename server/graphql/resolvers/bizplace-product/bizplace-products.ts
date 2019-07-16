import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const bizplaceProductsResolver = {
  async bizplaceProducts(_: any, params: ListParam) {
    const queryBuilder = getRepository(BizplaceProduct).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('BizplaceProduct.domain', 'Domain')
      .leftJoinAndSelect('BizplaceProduct.bizplace', 'Bizplace')
      .leftJoinAndSelect('BizplaceProduct.creator', 'Creator')
      .leftJoinAndSelect('BizplaceProduct.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
