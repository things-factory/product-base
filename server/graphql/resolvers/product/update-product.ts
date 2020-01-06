import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Product } from '../../../entities'

export const updateProductResolver = {
  async updateProduct(_: any, { id, patch }, context: any) {
    return await updateProduct(id, patch, context.state.domain, context.state.user)
  }
}

export async function updateProduct(id: string, patch: Product, domain: Domain, user: any, trxMgr?: EntityManager) {
  const repository: Repository<Product> = trxMgr ? trxMgr.getRepository(Product) : getRepository(Product)
  const product = await repository.findOne({
    domain,
    id
  })

  if (patch.productRef && patch.productRef.id) {
    patch.productRef = await repository.findOne(patch.productRef.id)
  }

  return repository.save({
    ...product,
    ...patch,
    updater: user
  })
}
