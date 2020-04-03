import { getRepository } from 'typeorm'
import { ProductSetOption } from '../../../entities'

export const productSetOptionResolver = {
  async productSetOption(_: any, { name }, context: any) {
    const repository = getRepository(ProductSetOption)

    return await getRepository(ProductSetOption).findOne({
      where: { domain: context.state.domain, name }, 
      relations: ['domain', 'creator', 'updater']
    })
  }
}

