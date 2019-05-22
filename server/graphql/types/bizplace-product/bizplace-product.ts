import { gql } from 'apollo-server-koa'

export const BizplaceProduct = gql`
  type BizplaceProduct {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
