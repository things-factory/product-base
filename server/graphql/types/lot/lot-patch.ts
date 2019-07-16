import { gql } from 'apollo-server-koa'

export const LotPatch = gql`
  input LotPatch {
    name: String
    productBatch: String
    qty: Float
    state: String
    description: String
  }
`
