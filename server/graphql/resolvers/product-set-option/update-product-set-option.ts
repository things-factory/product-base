import { getRepository } from 'typeorm'
import { ProductSetOption } from '../../../entities'

export const updateProductSetOption = {
  async updateProductSetOption(_: any, { name, patch }, context: any) {
    const repository = getRepository(ProductSetOption)
    const productSetOption = await repository.findOne({ 
      where: { domain: context.state.domain, name }
    })

    return await repository.save({
      ...productSetOption,
      ...patch,
      updater: context.state.user
    })
  }
}