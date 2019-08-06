import * as Product from './product'
import * as ProductOption from './product-option'
import * as ProductOptionDetail from './product-option-detail'
import * as ProductBatch from './product-batch'
import * as Lot from './lot'

export const queries = [Product.Query, ProductOption.Query, ProductOptionDetail.Query, ProductBatch.Query, Lot.Query]

export const mutations = [
  Product.Mutation,
  ProductOption.Mutation,
  ProductOptionDetail.Mutation,
  ProductBatch.Mutation,
  Lot.Mutation
]
