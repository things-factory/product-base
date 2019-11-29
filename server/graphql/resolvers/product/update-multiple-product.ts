import { EntityManager, getManager } from 'typeorm'
import { Product } from '../../../entities'
import { createProduct } from './create-product'
import { updateProduct } from './update-product'

export const updateMultipleProduct = {
  async updateMultipleProduct(_: any, { patches }, context: any): Promise<any> {
    getManager().transaction(async (trxMgr: EntityManager) => {
      let results = []
      const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
      const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')

      if (_createRecords.length > 0) {
        for (let i = 0; i < _createRecords.length; i++) {
          const patch: Product = _createRecords[i]
          const result = await createProduct(patch, context.state.domain, context.state.user, trxMgr)
          results.push({ result, cuFlag: '+' })
        }
      }

      if (_updateRecords.length > 0) {
        for (let i = 0; i < _updateRecords.length; i++) {
          const patch: Product = _updateRecords[i]
          const result = await updateProduct(patch.id, patch, context.state.domain, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: 'M' })
        }
      }

      return results
    })
  }
}
