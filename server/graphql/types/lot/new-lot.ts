import { gql } from 'apollo-server-koa'

export const NewLot = gql`
  input NewLot {
    name: String!
    productBatch: String!
    qty: Float!
    state: String!
    description: String
  }
`
