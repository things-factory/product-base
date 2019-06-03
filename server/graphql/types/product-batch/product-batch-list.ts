import { gql } from 'apollo-server-koa'

export const ProductBatchList = gql`
  input ProductBatchList {
    items: [ProductBatch]
    total: Int
  }
`
