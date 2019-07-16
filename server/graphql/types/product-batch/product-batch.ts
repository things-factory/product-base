import { gql } from 'apollo-server-koa'

export const ProductBatch = gql`
  type ProductBatch {
    id: String
    domain: Domain
    name: String
    yourName: String
    lots: [Lot]
    qty: Float
    state: String
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
