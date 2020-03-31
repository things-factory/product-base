import { NewProductOption } from './new-product-option'
import { ProductOption } from './product-option'
import { ProductOptionList } from './product-option-list'
import { ProductOptionPatch } from './product-option-patch'

export const Mutation = `
  createProductOption (
    productOption: NewProductOption!
  ): ProductOption

  updateProductOption (
    id: String!
    patch: ProductOptionPatch!
  ): ProductOption

  updateMultipleProductOption (
    patches: [ProductOptionPatch]!
  ): [ProductOption]

  deleteProductOption (
    id: String!
  ): Boolean

  deleteProductOptions (
    ids: [String]!
  ): Boolean
`

export const Query = `
  productOptions(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ProductOptionList
  productOption(name: String!): ProductOption
`

export const Types = [ProductOption, NewProductOption, ProductOptionPatch, ProductOptionList]
