import gql from 'graphql-tag'

export const NewProductOptionDetail = gql`
  input NewProductOptionDetail {
    name: String!
    productOption: ObjectRef!
    description: String
  }
`
