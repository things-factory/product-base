import gql from 'graphql-tag'

export const Product = gql`
  type Product {
    id: String
    domain: Domain
    bizplace: Bizplace
    name: String
    description: String
    productRef: Product
    productOptions: [ProductOption]
    type: String
    weightUnit: String
    weight: Float
    weightRatio: Float
    lengthUnit: String
    width: Float
    depth: Float
    height: Float
    auxUnit1: String
    auxValue1: Float
    auxUnit2: String
    auxValue2: Float
    auxUnit3: String
    auxValue3: Float
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
