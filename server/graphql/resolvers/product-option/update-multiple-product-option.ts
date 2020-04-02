import { getRepository } from 'typeorm'
import { ProductOption } from '../../../entities'
import { getMyBizplace } from '@things-factory/biz-base'

export const updateMultipleProductOption = {
  async updateMultipleProductOption(_: any, { patches }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const productOptionRepo = getRepository(ProductOption)
    const myBizplace = await getMyBizplace(context.state.user)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        const result = await productOptionRepo.save({
          ...newRecord,
          bizplace: myBizplace,
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
        const productOption = await productOptionRepo.findOne(newRecord.id)

        const result = await productOptionRepo.save({
          ...productOption,
          ...newRecord,
          bizplace: myBizplace,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
