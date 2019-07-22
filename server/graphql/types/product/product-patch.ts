import { gql } from 'apollo-server-koa'

export const ProductPatch = gql`
  input ProductPatch {
    company: String
    name: String
    yourName: String
    refTo: String
    aliases: [String]
    options: [String]
    type: String
    unit: String
    description: String
  }
`
