import { getRepository, In } from 'typeorm'
import { ProductSetOption } from '../../../entities'

export const deleteProductSetOptions = {
  async deleteProductSetOptions(_: any, { names }, context: any) {
    await getRepository(ProductSetOption).delete({ 
        domain: context.state.domain,
        name: In(names)
    })
    return true
  }
}

