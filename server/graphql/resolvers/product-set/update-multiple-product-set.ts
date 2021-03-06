import { getRepository } from 'typeorm'
import { ProductSet, Product } from '../../../entities'

export const updateMultipleProductSet = {
  async updateMultipleProductSet(_: any, { patches, product }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const productSetRepo = getRepository(ProductSet)
    const productRepo = await getRepository(Product).findOne(product.id)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        const result = await productSetRepo.save({
          ...newRecord,
          product: productRepo,
          domain: context.state.domain,
          creator: context.state.user,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: '+' })
      }
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const newRecord = _updateRecords[i]
        const productSet = await productSetRepo.findOne(newRecord.id)

        const result = await productSetRepo.save({
          ...productSet,
          ...newRecord,
          product: productRepo,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
