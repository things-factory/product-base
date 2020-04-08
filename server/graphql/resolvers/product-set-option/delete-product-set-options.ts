import { getRepository, In } from 'typeorm'
import { ProductSetOption } from '../../../entities'

export const deleteProductSetOptions = {
  async deleteProductSetOptions(_: any, { ids }, context: any) {
    await getRepository(ProductSetOption).delete({
      domain: context.state.domain,
      id: In(ids)
    })
    return true
  }
}
