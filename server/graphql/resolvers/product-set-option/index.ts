import { productSetOptionResolver } from './product-set-option'
import { productSetOptionsResolver } from './product-set-options'

import { updateProductSetOption } from './update-product-set-option'
import { updateMultipleProductSetOption } from './update-multiple-product-set-option'
import { createProductSetOption } from './create-product-set-option'
import { deleteProductSetOption } from './delete-product-set-option'
import { deleteProductSetOptions } from './delete-product-set-options'

export const Query = {
  ...productSetOptionsResolver,
  ...productSetOptionResolver
}

export const Mutation = {
  ...updateProductSetOption,
  ...updateMultipleProductSetOption,
  ...createProductSetOption,
  ...deleteProductSetOption,
  ...deleteProductSetOptions
}
