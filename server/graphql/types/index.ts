import * as Product from './product'
import * as BizplaceProduct from './bizplace-product'
import * as ProductOption from './product-option'
import * as ProductOptionDetail from './product-option-detail'

export const queries = [Product.Query, BizplaceProduct.Query, ProductOption.Query, ProductOptionDetail.Query]

export const mutations = [
  Product.Mutation,
  BizplaceProduct.Mutation,
  ProductOption.Mutation,
  ProductOptionDetail.Mutation
]

export const types = [...Product.Types, ...BizplaceProduct.Types, ...ProductOption.Types, ...ProductOptionDetail.Types]
