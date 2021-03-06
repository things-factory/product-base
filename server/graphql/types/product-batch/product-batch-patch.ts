import gql from 'graphql-tag'

export const ProductBatchPatch = gql`
  input ProductBatchPatch {
    name: String
    yourName: String
    lots: [String]
    qty: Float
    status: String
    product: String
    description: String
  }
`
