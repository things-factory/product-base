import { gql } from 'apollo-server-koa'

export const NewProduct = gql`
  input NewProduct {
    name: String!
    yourName: String!
    lots: [String]!
    qty: Int!
    state: String!
    description: String
  }
`
