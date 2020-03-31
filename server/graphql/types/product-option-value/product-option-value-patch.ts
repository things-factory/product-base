import gql from 'graphql-tag'

export const ProductOptionValuePatch = gql`
  input ProductOptionValuePatch {
    id: String
    name: String
    productOption: ObjectRef
    description: String
    cuFlag: String
  }
`
