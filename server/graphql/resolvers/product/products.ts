import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { convertListParams, ListParam, buildQuery } from '@things-factory/shell'
import { getRepository, SelectQueryBuilder } from 'typeorm'
import { Product } from '../../../entities'

export const productsResolver = {
  async products(_: any, params: ListParam, context: any) {
    params.filters.push({
      name: 'bizplace',
      operator: 'in',
      value: await getPermittedBizplaceIds(context.state.domain, context.state.user),
      relation: true
    })

    const qb: SelectQueryBuilder<Product> = getRepository(Product).createQueryBuilder('prd')
    buildQuery(qb, params, context)

    qb.leftJoinAndSelect('prd.domain', 'domain')
      .leftJoinAndSelect('prd.bizplace', 'bizplace')
      .leftJoinAndSelect('prd.productRef', 'productRef')
      .leftJoinAndSelect('prd.creator', 'creator')
      .leftJoinAndSelect('prd.updater', 'updater')

    let [items, total] = await qb.getManyAndCount()

    return { items, total }
  }
}
