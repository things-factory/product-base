import { gql } from 'apollo-server-koa'

export const NewProduct = gql`
  input NewProduct {
    company: String!
    name: String!
    yourName: String!
    refTo: String!
    aliases: [String]!
    options: [String]!
    type: String!
    unit: String!
    description: String
  }
`
