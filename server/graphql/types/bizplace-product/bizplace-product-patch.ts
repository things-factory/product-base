import { gql } from 'apollo-server-koa'

export const BizplaceProductPatch = gql`
  input BizplaceProductPatch {
    name: String
    description: String
  }
`
