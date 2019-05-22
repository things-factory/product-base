import { BizplaceProduct } from './bizplace-product'
import { NewBizplaceProduct } from './new-bizplace-product'
import { BizplaceProductPatch } from './bizplace-product-patch'

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
  bizplaceProducts: [BizplaceProduct]
  bizplaceProduct(id: String!): BizplaceProduct
`

export const Types = [BizplaceProduct, NewBizplaceProduct, BizplaceProductPatch]
