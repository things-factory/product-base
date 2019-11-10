import gql from 'graphql-tag'

export const ProductOptionList = gql`
  type ProductOptionList {
    items: [ProductOption]
    total: Int
  }
`
