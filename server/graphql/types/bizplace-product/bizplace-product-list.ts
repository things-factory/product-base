import { gql } from 'apollo-server-koa'

export const BizplaceProductList = gql`
  type BizplaceProductList {
    items: [BizplaceProduct]
    total: Int
  }
`
