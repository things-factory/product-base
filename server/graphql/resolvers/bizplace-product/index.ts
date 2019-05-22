import { bizplaceProductResolver } from './bizplace-product'
import { bizplaceProductsResolver } from './bizplace-products'

import { updateBizplaceProduct } from './update-bizplace-product'
import { createBizplaceProduct } from './create-bizplace-product'
import { deleteBizplaceProduct } from './delete-bizplace-product'

export const Query = {
  ...bizplaceProductsResolver,
  ...bizplaceProductResolver
}

export const Mutation = {
  ...updateBizplaceProduct,
  ...createBizplaceProduct,
  ...deleteBizplaceProduct
}
