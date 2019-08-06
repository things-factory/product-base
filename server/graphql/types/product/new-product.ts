import { gql } from 'apollo-server-koa'

export const NewProduct = gql`
  input NewProduct {
    company: String!
    name: String!
    yourName: String!
    refTo: String
    aliases: [String]
    productBatch: [String]
    options: [String]
    type: String!
    unit: String
    weight: Number
    description: String
  }
`
