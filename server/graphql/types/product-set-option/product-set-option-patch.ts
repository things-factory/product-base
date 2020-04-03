import gql from 'graphql-tag'

export const ProductSetOptionPatch = gql`
  input ProductSetOptionPatch {
    id: String
    name: String
    description: String
    productSet: ObjectRef
    productOptionValue: ObjectRef
    cuFlag: String
  }
`
