import { productSetResolver } from './product-set'
import { productSetsResolver } from './product-sets'

import { updateProductSet } from './update-product-set'
import { updateMultipleProductSet } from './update-multiple-product-set'
import { createProductSet } from './create-product-set'
import { deleteProductSet } from './delete-product-set'
import { deleteProductSets } from './delete-product-sets'

export const Query = {
  ...productSetsResolver,
  ...productSetResolver
}

export const Mutation = {
  ...updateProductSet,
  ...updateMultipleProductSet,
  ...createProductSet,
  ...deleteProductSet,
  ...deleteProductSets
}
