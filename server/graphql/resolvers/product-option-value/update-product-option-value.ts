import { Bizplace } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { ProductOptionValue } from '../../../entities'

export const updateProductOptionValue = {
  async updateProductOptionValue(_: any, { id, patch }, context: any) {
    const productOptionValue = await getRepository(ProductOptionValue).findOne({ domain: context.state.domain, id })

    return await getRepository(ProductOptionValue).save({
      ...productOptionValue,
      ...patch,
      updater: context.state.user
    })
  }
}
