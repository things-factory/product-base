import { getPermittedBizplaceIds } from '@things-factory/biz-base'
import { buildQuery, ListParam, buildCondition } from '@things-factory/shell'
import { getRepository, SelectQueryBuilder, Brackets } from 'typeorm'
import { Product } from '../../../entities'

export const productsResolver = {
  async products(_: any, params: ListParam, context: any) {
    const qb: SelectQueryBuilder<Product> = getRepository(Product).createQueryBuilder()

    const productFilters = params.filters.filter(x => x.name == 'product_info')

    const filters = params.filters.filter(x => x.name != 'product_info')

    const productFilterColumns = ['sku', 'name', 'description']

    params.filters = [
      ...filters,
      {
        name: 'bizplace_id',
        operator: 'in',
        value: await getPermittedBizplaceIds(context.state.domain, context.state.user)
      }
    ]

    buildQuery(qb, params, context)
    if (productFilters && productFilters.length > 0) {
      let productInfo = productFilters[0]
      qb.andWhere(
        new Brackets(qb2 => {
          productFilterColumns.forEach(filter => {
            const condition = buildCondition(
              qb.alias,
              filter,
              productInfo.operator,
              productInfo.value,
              productInfo.relation,
              Object.keys(qb.getParameters()).length
            )

            qb2.orWhere(condition.clause, condition.parameters)
          })
        })
      )
    }

    const [items, total] = await qb
      .leftJoinAndSelect('Product.domain', 'Domain')
      .leftJoinAndSelect('Product.bizplace', 'Bizplace')
      .leftJoinAndSelect('Product.productRef', 'ProductRef')
      .leftJoinAndSelect('Product.parentProductRef', 'parentProductRef')
      .leftJoinAndSelect('Product.creator', 'Creator')
      .leftJoinAndSelect('Product.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
