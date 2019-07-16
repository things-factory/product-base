import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { BizplaceProduct } from './bizplace-product'
import { BizplaceProductList } from './bizplace-product-list'
import { BizplaceProductPatch } from './bizplace-product-patch'
import { NewBizplaceProduct } from './new-bizplace-product'

export const Mutation = `
  createBizplaceProduct (
    bizplaceProduct: NewBizplaceProduct!
  ): BizplaceProduct

  updateBizplaceProduct (
    name: String!
    patch: BizplaceProductPatch!
  ): BizplaceProduct

  deleteBizplaceProduct (
    name: String!
  ): BizplaceProduct

  publishBizplaceProduct (
    name: String!
  ): BizplaceProduct
`

export const Query = `
  bizplaceProducts(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceProductList
  bizplaceProduct(name: String!): BizplaceProduct
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  BizplaceProduct,
  NewBizplaceProduct,
  BizplaceProductPatch,
  BizplaceProductList
]
