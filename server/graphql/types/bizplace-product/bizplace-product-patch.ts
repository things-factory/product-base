import { gql } from 'apollo-server-koa'

export const BizplaceProductPatch = gql`
  input BizplaceProductPatch {
    bizplace: String
    name: String
    location: String
    description: String
  }
`
