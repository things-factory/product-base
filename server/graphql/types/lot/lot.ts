import { gql } from 'apollo-server-koa'

export const Lot = gql`
  type Lot {
    id: String
    domain: Domain
    name: String
    productBatch: ProductBatch
    qty: Float
    state: String
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
