import gql from 'graphql-tag'

export const ProductPatch = gql`
  input ProductPatch {
    id: String
    sku: String
    name: String
    description: String
    productRef: ObjectRef
    parentProductRef: ObjectRef
    bundleQty: Float
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
    primaryUnit: String
    primaryValue: Float
    auxUnit1: String
    auxValue1: String
    auxUnit2: String
    auxValue2: String
    auxUnit3: String
    auxValue3: String
    cuFlag: String
  }
`
