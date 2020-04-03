import * as Product from './product'
import * as ProductSet from './product-set'
import * as ProductSetOption from './product-set-option'
import * as ProductOption from './product-option'
import * as ProductOptionValue from './product-option-value'
import * as ProductBatch from './product-batch'
import * as Lot from './lot'

export const queries = [
  Product.Query,
  ProductSet.Query,
  ProductSetOption.Query,
  ProductOption.Query,
  ProductOptionValue.Query,
  ProductBatch.Query,
  Lot.Query
]

export const mutations = [
  Product.Mutation,
  ProductSet.Mutation,
  ProductSetOption.Mutation,
  ProductOption.Mutation,
  ProductOptionValue.Mutation,
  ProductBatch.Mutation,
  Lot.Mutation
]
