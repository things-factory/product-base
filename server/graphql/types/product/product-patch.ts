import gql from 'graphql-tag'

export const ProductPatch = gql`
  input ProductPatch {
    id: String
    name: String
    description: String
    productRef: ObjectRef
    productOptions: [ObjectRef]
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
    cuFlag: String
  }
`
