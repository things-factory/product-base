import gql from 'graphql-tag'

export const ProductSet = gql`
  type ProductSet {
    id: String
    domain: Domain
    name: String
    description: String
    productSupersede: ProductSet
    type: String
    expirationPeriod: Int
    weightUnit: String
    weight: Float
    weightRatio: Float
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
    status: String
    packingType: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
