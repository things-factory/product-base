import { gql } from 'apollo-server-koa'

export const ProductBatchPatch = gql`
  input ProductBatchPatch {
    name: String
    yourName: String
    lots: [String]
    qty: Float
    state: String
    description: String
  }
`
