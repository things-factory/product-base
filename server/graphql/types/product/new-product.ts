import gql from 'graphql-tag'

export const NewProduct = gql`
  input NewProduct {
    name: String!
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
    auxValue1: String
    auxUnit2: String
    auxValue2: String
    auxUnit3: String
    auxValue3: String
  }
`
