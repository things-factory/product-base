import gql from 'graphql-tag'

export const ProductBatchList = gql`
  type ProductBatchList {
    items: [ProductBatch]
    total: Float
  }
`
