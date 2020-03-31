import gql from 'graphql-tag'

export const ProductOptionValueList = gql`
  type ProductOptionValueList {
    items: [ProductOptionValue]
    total: Int
  }
`
