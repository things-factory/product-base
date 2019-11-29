import { EntityManager, getRepository } from 'typeorm'
import { Product } from '../../../entities'

export const deleteProductsResolver = {
  async deleteProducts(_: any, { ids }, _context: any) {
    deleteProducts(ids)
  }
}

export async function deleteProducts(ids: string[], trxMgr?: EntityManager) {
  const repository = trxMgr ? trxMgr.getRepository(Product) : getRepository(Product)
  return await repository.delete(ids)
}
