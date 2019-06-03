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
    id: String!
    patch: BizplaceProductPatch!
  ): BizplaceProduct

  deleteBizplaceProduct (
    id: String!
  ): BizplaceProduct

  publishBizplaceProduct (
    id: String!
  ): BizplaceProduct
`

export const Query = `
  bizplaceProducts(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceProductList
  bizplaceProduct(id: String!): BizplaceProduct
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
