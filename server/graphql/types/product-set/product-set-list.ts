import gql from 'graphql-tag'

export const ProductSetList = gql`
  type ProductSetList {
    items: [ProductSet]
    total: Int
  }
`
