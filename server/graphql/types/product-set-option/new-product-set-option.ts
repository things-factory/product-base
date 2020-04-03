import gql from 'graphql-tag'

export const NewProductSetOption = gql`
  input NewProductSetOption {
    name: String!
    productSet: ObjectRef
    productOptionValue: ObjectRef
    description: String
  }
`
