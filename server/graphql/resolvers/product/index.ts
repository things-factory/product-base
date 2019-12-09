import { createProduct, createProductResolver } from './create-product'
import { deleteProduct, deleteProductResolver } from './delete-product'
import { deleteProducts, deleteProductsResolver } from './delete-products'
import { productResolver } from './product'
import { productsResolver } from './products'
import { productsByBizplaceResolver } from './products-by-bizplace'
import { updateMultipleProduct } from './update-multiple-product'
import { updateProduct, updateProductResolver } from './update-product'

export const Query = {
  ...productsResolver,
  ...productResolver,
  ...productsByBizplaceResolver
}

export const Mutation = {
  ...updateProductResolver,
  ...createProductResolver,
  ...deleteProductResolver,
  ...deleteProductsResolver,
  ...updateMultipleProduct
}

export { createProduct, deleteProducts, updateProduct, deleteProduct }
