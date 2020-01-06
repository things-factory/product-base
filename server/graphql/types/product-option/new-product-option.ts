import gql from 'graphql-tag'

export const NewProductOption = gql`
  input NewProductOption {
    name: String!
    description: String
    product: ObjectRef!
    productOptionDetails: [ObjectRef]
  }
`
