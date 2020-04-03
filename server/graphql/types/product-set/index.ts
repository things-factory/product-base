import { ProductSet } from './product-set'
import { NewProductSet } from './new-product-set'
import { ProductSetPatch } from './product-set-patch'
import { ProductSetList } from './product-set-list'

export const Mutation = `
  createProductSet (
    productSet: NewProductSet!
  ): ProductSet

  updateProductSet (
    name: String!
    patch: ProductSetPatch!
  ): ProductSet

  updateMultipleProductSet (
    patches: [ProductSetPatch]!
  ): [ProductSet]

  deleteProductSet (
    name: String!
  ): Boolean

  deleteProductSets (
    names: [String]!
  ): Boolean
`

export const Query = `
  productSets(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ProductSetList
  productSet(name: String!): ProductSet
`

export const Types = [ProductSet, NewProductSet, ProductSetPatch, ProductSetList]
