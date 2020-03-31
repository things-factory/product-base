import { Bizplace, getUserBizplaces } from '@things-factory/biz-base'
import { getRepository } from 'typeorm'
import { ProductOptionValue } from '../../../entities'

export const createProductOptionValue = {
  async createProductOptionValue(_: any, { productOptionValue }, context: any) {
    return await getRepository(ProductOptionValue).save({
      ...productOptionValue,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
