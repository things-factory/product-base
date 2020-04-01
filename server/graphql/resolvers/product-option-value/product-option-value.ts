import { getRepository } from 'typeorm'
import { ProductOption, ProductOptionValue } from '../../../entities'

export const ProductOptionValueResolver = {
  async productOptionValue(_: any, { productOption, name }, context: any) {
    return await getRepository(ProductOptionValue).findOne({
      where: {
        domain: context.state.domain,
        name,
        productOption: await getRepository(ProductOption).findOne(productOption.id)
      },
      relations: ['domain', 'productOption', 'creator', 'updater']
    })
  }
}
