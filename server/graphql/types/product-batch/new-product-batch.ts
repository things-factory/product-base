import { gql } from 'apollo-server-koa'

export const NewProductBatch = gql`
  input NewProductBatch {
    name: String!
    yourName: String!
    lots: [String]!
    qty: Float!
    state: String!
    description: String
  }
`
