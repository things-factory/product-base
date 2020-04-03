import gql from 'graphql-tag'

export const ProductSetOptionList = gql`
  type ProductSetOptionList {
    items: [ProductSetOption]
    total: Int
  }
`
