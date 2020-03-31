import gql from 'graphql-tag'

export const ProductOptionPatch = gql`
  input ProductOptionPatch {
    id: String
    name: String
    productOptionValues: [ObjectRef]
    description: String
    cuFlag: String
  }
`
