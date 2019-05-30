import { ProductBatch } from './product-batch'
import { NewProductBatch } from './new-product-batch'
import { ProductBatchPatch } from './product-batch-patch'

export const Mutation = `
  createProductBatch (
    productBatch: NewProductBatch!
  ): ProductBatch

  updateProductBatch (
    id: String!
    patch: ProductBatchPatch!
  ): ProductBatch

  deleteProductBatch (
    id: String!
  ): ProductBatch

  publishProductBatch (
    id: String!
  ): ProductBatch
`

export const Query = `
  productBatches: [ProductBatch]
  productBatch(id: String!): ProductBatch
`

export const Types = [ProductBatch, NewProductBatch, ProductBatchPatch]
