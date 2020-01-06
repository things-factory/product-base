import gql from 'graphql-tag'

export const ProductOptionDetailPatch = gql`
  input ProductOptionDetailPatch {
    id: String
    name: String
    productOption: ObjectRef
    description: String
    cuFlag: String
  }
`
