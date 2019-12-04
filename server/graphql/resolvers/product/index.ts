import { createProduct } from './create-product'
import { deleteProduct } from './delete-product'
import { deleteProducts } from './delete-products'
import { productResolver } from './product'
import { productsResolver } from './products'
import { productsByBizplaceResolver } from './products-by-bizplace'
import { updateMultipleProduct } from './update-multiple-product'
import { updateProduct } from './update-product'

export const Query = {
  ...productsResolver,
  ...productResolver,
  ...productsByBizplaceResolver
}

export const Mutation = {
  ...updateProduct,
  ...createProduct,
  ...deleteProduct,
  ...deleteProducts,
  ...updateMultipleProduct
}
