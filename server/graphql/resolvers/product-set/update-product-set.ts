import { getRepository } from 'typeorm'
import { ProductSet } from '../../../entities'

export const updateProductSet = {
  async updateProductSet(_: any, { name, patch }, context: any) {
    const repository = getRepository(ProductSet)
    const productSet = await repository.findOne({
      where: { domain: context.state.domain, name }
    })

    return await repository.save({
      ...productSet,
      ...patch,
      updater: context.state.user
    })
  }
}
