import gql from 'graphql-tag'

export const NewProductOptionValue = gql`
  input NewProductOptionValue {
    name: String!
    productOption: ObjectRef!
    description: String
  }
`
