import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Product } from '../../../entities'

export const productByIdResolver = {
  async productById(_: any, { id }) {
    return await getRepository(Product).findOne({ where: { id } })
  }
}
