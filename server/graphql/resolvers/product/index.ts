import { createProduct, createProductResolver } from './create-product'
import { deleteProduct, deleteProductResolver } from './delete-product'
import { deleteProducts, deleteProductsResolver } from './delete-products'
import { productResolver } from './product'
import { productsResolver } from './products'
import { updateMultipleProduct } from './update-multiple-product'
import { updateProduct, updateProductResolver } from './update-product'

export const Query = {
  ...productsResolver,
  ...productResolver
}

export const Mutation = {
  ...updateProductResolver,
  ...createProductResolver,
  ...deleteProductResolver,
  ...deleteProductsResolver,
  ...updateMultipleProduct
}

export { createProduct, deleteProducts, updateProduct, deleteProduct }
