import * as Product from './product'
import * as ProductOption from './product-option'
import * as ProductOptionValue from './product-option-value'
import * as ProductBatch from './product-batch'
import * as Lot from './lot'

export const queries = [Product.Query, ProductOption.Query, ProductOptionValue.Query, ProductBatch.Query, Lot.Query]

export const mutations = [
  Product.Mutation,
  ProductOption.Mutation,
  ProductOptionValue.Mutation,
  ProductBatch.Mutation,
  Lot.Mutation
]
