import gql from 'graphql-tag'

export const ProductOptionDetailList = gql`
  type ProductOptionDetailList {
    items: [ProductOptionDetail]
    total: Int
  }
`
