import { gql } from 'apollo-server-koa'

export const ProductOptionDetailList = gql`
  input ProductOptionDetailList {
    items: [ProductOptionDetail]
    total: Int
  }
`
