import gql from 'graphql-tag'

export const LotList = gql`
  type LotList {
    items: [Lot]
    total: Float
  }
`
