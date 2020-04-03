import gql from 'graphql-tag'

export const ProductSetOption = gql`
  type ProductSetOption {
    id: String
    name: String
    domain: Domain
    description: String
    productSet: ProductSet
    productOptionValue: ProductOptionValue
    updater: User
    creator: User
    updatedAt: String
    createdAt: String
  }
`
