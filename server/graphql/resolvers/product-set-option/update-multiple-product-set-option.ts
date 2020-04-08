import { getRepository } from 'typeorm'
import { ProductSet, ProductSetOption, ProductOptionValue } from '../../../entities'
import uuid from 'uuid/v4'

export const updateMultipleProductSetOption = {
  async updateMultipleProductSetOption(_: any, { patches, productSetId }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const productSetOptionRepo = getRepository(ProductSetOption)

    const productSet = await getRepository(ProductSet).findOne(productSetId)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        let productOptionValue = await getRepository(ProductOptionValue).findOne(newRecord.productOptionValue.id)

        const result = await productSetOptionRepo.save({
          ...newRecord,
          name: uuid(),
          productOptionValue,
          productSet,
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
        const productSetOption = await productSetOptionRepo.findOne(newRecord.id)
        let productOptionValue = await getRepository(ProductOptionValue).findOne(newRecord.productOptionValue.id)

        const result = await productSetOptionRepo.save({
          ...productSetOption,
          ...newRecord,
          productOptionValue,
          productSet,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
