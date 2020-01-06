import gql from 'graphql-tag'

export const LotPatch = gql`
  input LotPatch {
    name: String
    productBatch: String
    qty: Float
    state: String
    description: String
  }
`
