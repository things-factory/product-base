import { ProductOptionDetail } from './product-option-detail'
import { NewProductOptionDetail } from './new-product-option-detail'
import { ProductOptionDetailPatch } from './product-option-detail-patch'

export const Mutation = `
  createProductOptionDetail (
    productOptionDetail: NewProductOptionDetail!
  ): ProductOptionDetail

  updateProductOptionDetail (
    id: String!
    patch: ProductOptionDetailPatch!
  ): ProductOptionDetail

  deleteProductOptionDetail (
    id: String!
  ): ProductOptionDetail

  publishProductOptionDetail (
    id: String!
  ): ProductOptionDetail
`

export const Query = `
  productOptionDetails: [ProductOptionDetail]
  productOptionDetail(id: String!): ProductOptionDetail
`

export const Types = [ProductOptionDetail, NewProductOptionDetail, ProductOptionDetailPatch]
