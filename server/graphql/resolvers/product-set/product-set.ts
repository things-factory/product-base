import { getRepository } from 'typeorm'
import { ProductSet } from '../../../entities'

export const productSetResolver = {
  async productSet(_: any, { name }, context: any) {
    const repository = getRepository(ProductSet)

    return await getRepository(ProductSet).findOne({
      where: { domain: context.state.domain, name }, 
      relations: ['domain', 'creator', 'updater']
    })
  }
}

