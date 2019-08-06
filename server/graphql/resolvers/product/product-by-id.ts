import { getRepository } from 'typeorm'
import { Product } from '../../../entities'

export const productByIdResolver = {
  async productById(_: any, { id }) {
    return await getRepository(Product).findOne({
      where: { id },
      relations: ['domain', 'bizplace', 'refTo', 'aliases', 'options', 'creator', 'updater']
    })
  }
}
