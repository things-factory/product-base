import { gql } from 'apollo-server-koa'

export const NewBizplaceProduct = gql`
  input NewBizplaceProduct {
    name: String!
    description: String
  }
`
