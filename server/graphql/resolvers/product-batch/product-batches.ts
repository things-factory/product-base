import { getRepository } from 'typeorm'
import { ProductBatch } from '../../../entities'

export const productBatchesResolver = {
  async productBatches() {
    const repository = getRepository(ProductBatch)

    return await repository.find()
  }
}
