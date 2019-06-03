import { gql } from 'apollo-server-koa'

export const LotList = gql`
  type LotList {
    items: [Lot]
    total: Int
  }
`
