import gql from 'graphql-tag'

export const NewProductBatch = gql`
  input NewProductBatch {
    name: String!
    yourName: String!
    lots: [String]!
    qty: Float!
    product: String
    status: String!
    description: String
  }
`
