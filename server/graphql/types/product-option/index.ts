import { ProductOption } from './product-option'
import { NewProductOption } from './new-product-option'
import { ProductOptionPatch } from './product-option-patch'

export const Mutation = `
  createProductOption (
    productOption: NewProductOption!
  ): ProductOption

  updateProductOption (
    id: String!
    patch: ProductOptionPatch!
  ): ProductOption

  deleteProductOption (
    id: String!
  ): ProductOption

  publishProductOption (
    id: String!
  ): ProductOption
`

export const Query = `
  productOptions: [ProductOption]
  productOption(id: String!): ProductOption
`

export const Types = [ProductOption, NewProductOption, ProductOptionPatch]
