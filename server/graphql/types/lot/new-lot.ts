import { gql } from 'apollo-server-koa'

export const NewLot = gql`
  input NewLot {
    name: String!
    description: String
  }
`
