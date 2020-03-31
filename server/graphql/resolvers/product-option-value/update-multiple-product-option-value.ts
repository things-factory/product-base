import { getRepository } from 'typeorm'
import { ProductOption, ProductOptionValue } from '../../../entities'

export const updateMultipleProductOptionValue = {
  async updateMultipleProductOptionValue(_: any, { patches }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const productOptionValueRepo = getRepository(ProductOptionValue)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        const result = await productOptionValueRepo.save({
          ...newRecord,
          domain: context.state.domain,
          productOption: await getRepository(ProductOption).findOne(newRecord.productOption.id),
          creator: context.state.user,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: '+' })
      }
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const newRecord = _updateRecords[i]
        const productOptionValue = await productOptionValueRepo.findOne(newRecord.id)

        if (newRecord.productOption && newRecord.productOption.id) {
          newRecord.productOption = await getRepository(ProductOption).findOne(newRecord.productOption.id)
        }

        const result = await productOptionValueRepo.save({
          ...productOptionValue,
          ...newRecord,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
