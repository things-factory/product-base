import gql from 'graphql-tag'

export const ProductOption = gql`
  type ProductOption {
    id: String
    name: String
    domain: Domain
    productOptionValues: [ProductOptionValue]
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
