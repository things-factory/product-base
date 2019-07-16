import { getRepository } from 'typeorm'
import { BizplaceProduct } from '../../../entities'

export const deleteBizplaceProduct = {
  async deleteBizplaceProduct(_: any, { name }, context: any) {
    return await getRepository(BizplaceProduct).delete({ domain: context.domain, name })
  }
}
