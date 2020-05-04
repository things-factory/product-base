import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository, SelectQueryBuilder } from 'typeorm'
import { Product } from '../../../entities'

export const productsResolver = {
  async products(_: any, params: ListParam, context: any) {
    const qb: SelectQueryBuilder<Product> = getRepository(Product).createQueryBuilder()

    params.filters = [
      ...params.filters,
      {
        name: 'bizplace_id',
        operator: 'in',
        value: await getPermittedBizplaceIds(context.state.domain, context.state.user),
      },
    ]
    buildQuery(qb, params, context)
    const [items, total] = await qb
      .leftJoinAndSelect('Product.domain', 'Domain')
      .leftJoinAndSelect('Product.bizplace', 'Bizplace')
      .leftJoinAndSelect('Product.productRef', 'ProductRef')
      .leftJoinAndSelect('Product.creator', 'Creator')
      .leftJoinAndSelect('Product.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  },
}
