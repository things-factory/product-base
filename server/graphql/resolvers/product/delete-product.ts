import { EntityManager, getRepository, Repository } from 'typeorm'
import { Product } from '../../../entities'

export const deleteProductResolver = {
  async deleteProduct(_: any, { id }, _context: any) {
    return deleteProduct(id)
  }
}

export async function deleteProduct(id: string, trxMgr?: EntityManager) {
  const repository: Repository<Product> = trxMgr ? trxMgr.getRepository(Product) : getRepository(Product)
  return await repository.delete(id)
}
