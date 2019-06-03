import { gql } from 'apollo-server-koa'

export const LotList = gql`
  input LotList {
    items: [Lot]
    total: Int
  }
`
