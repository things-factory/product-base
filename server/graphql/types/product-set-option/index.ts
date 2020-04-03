import { ProductSetOption } from './product-set-option'
import { NewProductSetOption } from './new-product-set-option'
import { ProductSetOptionPatch } from './product-set-option-patch'
import { ProductSetOptionList } from './product-set-option-list'

export const Mutation = `
  createProductSetOption (
    productSetOption: NewProductSetOption!
  ): ProductSetOption

  updateProductSetOption (
    name: String!
    patch: ProductSetOptionPatch!
  ): ProductSetOption

  updateMultipleProductSetOption (
    patches: [ProductSetOptionPatch]!
  ): [ProductSetOption]

  deleteProductSetOption (
    name: String!
  ): Boolean

  deleteProductSetOptions (
    names: [String]!
  ): Boolean
`

export const Query = `
  productSetOptions(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ProductSetOptionList
  productSetOption(name: String!): ProductSetOption
`

export const Types = [ProductSetOption, NewProductSetOption, ProductSetOptionPatch, ProductSetOptionList]
