import gql from 'graphql-tag'

export const NewLot = gql`
  input NewLot {
    name: String!
    productBatch: String!
    qty: Float!
    state: String!
    description: String
  }
`
