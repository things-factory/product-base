import { gql } from 'apollo-server-koa'

export const ProductList = gql`
  input ProductList {
    items: [Product]
    total: Int
  }
`
