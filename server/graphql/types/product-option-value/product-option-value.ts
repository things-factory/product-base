import gql from 'graphql-tag'

export const ProductOptionValue = gql`
  type ProductOptionValue {
    id: String
    domain: Domain
    name: String
    productOption: ProductOption
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
