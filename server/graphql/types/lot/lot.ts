import { gql } from 'apollo-server-koa'

export const Lot = gql`
  type Lot {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
