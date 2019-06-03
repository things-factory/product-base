import { gql } from 'apollo-server-koa'

export const ProductOptionList = gql`
  input ProductOptionList {
    items: [ProductOption]
    total: Int
  }
`
