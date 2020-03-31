import gql from 'graphql-tag'

export const NewProductOption = gql`
  input NewProductOption {
    name: String!
    description: String
    productOptionValues: [ObjectRef]
  }
`
