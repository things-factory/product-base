import { gql } from 'apollo-server-koa'

export const BizplaceProductList = gql`
  input BizplaceProductList {
    items: [BizplaceProduct]
    total: Int
  }
`
