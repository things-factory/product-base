import { gql } from 'apollo-server-koa'

export const Product = gql`
  type Product {
    id: String
    domain: Domain
    bizplace: Bizplace
    name: String
    description: String
    productRef: Product
    weight: Float
    unit: String
    productOptions: [ProductOption]
    type: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
