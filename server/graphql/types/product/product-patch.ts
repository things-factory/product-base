import { gql } from 'apollo-server-koa'

export const ProductPatch = gql`
  input ProductPatch {
    name: String
    yourName: String
    type: String
    unit: String
    lots: [String]
    qty: Int
    state: String
    description: String
  }
`
