import gql from 'graphql-tag'

export const ProductOptionPatch = gql`
  input ProductOptionPatch {
    id: String
    name: String
    product: ObjectRef
    productOptionDetails: [ObjectRef]
    description: String
    cuFlag: String
  }
`
