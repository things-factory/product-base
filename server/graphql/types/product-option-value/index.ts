import { NewProductOptionValue } from './new-product-option-value'
import { ProductOptionValue } from './product-option-value'
import { ProductOptionValueList } from './product-option-value-list'
import { ProductOptionValuePatch } from './product-option-value-patch'

export const Mutation = `
  createProductOptionValue (
    productOptionValue: NewProductOptionValue!
  ): ProductOptionValue

  updateProductOptionValue (
    id: String!
    patch: ProductOptionValuePatch!
  ): ProductOptionValue

  updateMultipleProductOptionValue (
    patches: [ProductOptionValuePatch]!
  ): [ProductOptionValue]

  deleteProductOptionValue (
    id: String!
  ): Boolean

  deleteProductOptionValues (
    ids: [String]!
  ): Boolean
`

export const Query = `
  productOptionValues(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ProductOptionValueList
  productOptionValue(productOption: ObjectRef!, name: String!): ProductOptionValue
`

export const Types = [ProductOptionValue, NewProductOptionValue, ProductOptionValuePatch, ProductOptionValueList]
