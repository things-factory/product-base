import gql from 'graphql-tag'

export const ProductPatch = gql`
  input ProductPatch {
    id: String
    name: String
    description: String
    productRef: ObjectRef
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
    cuFlag: String
  }
`
