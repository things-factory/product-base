import { gql } from 'apollo-server-koa'

export const BizplaceProduct = gql`
  type BizplaceProduct {
    id: String
    domain: Domain
    bizplace: Bizplace
    name: String
    location: String
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
