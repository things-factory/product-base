import { gql } from 'apollo-server-koa'

export const LotPatch = gql`
  input LotPatch {
    name: String
    description: String
  }
`
