import { gql } from 'apollo-server-koa'

export const NewProduct = gql`
  input NewProduct {
    name: String!
    yourName: String!
    type: String!
    unit: String!
    lots: [String]!
    qty: Int!
    state: String!
    description: String
  }
`
