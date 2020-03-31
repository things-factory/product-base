import { createProductOptionValue } from './create-product-option-value'
import { deleteProductOptionValue } from './delete-product-option-value'
import { deleteProductOptionValues } from './delete-product-option-values'
import { ProductOptionValueResolver } from './product-option-value'
import { ProductOptionValuesResolver } from './product-option-values'
import { updateMultipleProductOptionValue } from './update-multiple-product-option-value'
import { updateProductOptionValue } from './update-product-option-value'

export const Query = {
  ...ProductOptionValuesResolver,
  ...ProductOptionValueResolver
}

export const Mutation = {
  ...updateProductOptionValue,
  ...createProductOptionValue,
  ...deleteProductOptionValue,
  ...deleteProductOptionValues,
  ...updateMultipleProductOptionValue
}
