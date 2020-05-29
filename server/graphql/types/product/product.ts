import gql from 'graphql-tag'

export const Product = gql`
  type Product {
    id: String
    domain: Domain
    bizplace: Bizplace
    sku: String
    name: String
    description: String
    productRef: Product
    childProductRef: Product
    childProductQty: Float
    packingType: String
    type: String
    expirationPeriod: Int
    weightUnit: String
    weight: Float
    density: Float
    lengthUnit: String
    width: Float
    depth: Float
    height: Float
    auxUnit1: String
    auxValue1: String
    auxUnit2: String
    auxValue2: String
    auxUnit3: String
    auxValue3: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
