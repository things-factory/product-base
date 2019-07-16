import { gql } from 'apollo-server-koa'

export const NewBizplaceProduct = gql`
  input NewBizplaceProduct {
    bizplace: String!
    name: String!
    location: String!
    description: String
  }
`
