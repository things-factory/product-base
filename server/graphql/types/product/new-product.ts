import gql from 'graphql-tag'

export const NewProduct = gql`
  input NewProduct {
    sku: String
    name: String!
    description: String
    productRef: ObjectRef
    childProductRef: ObjectRef
    childProductQty: Float
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
  }
`
