import { gql } from 'apollo-server-koa'

export const NewProduct = gql`
  input NewProduct {
    bizplace: ObjectRef
    name: String!
    description: String
    productRef: ObjectRef
    unit: String
    weight: Float
    productOptions: [ObjectRef]
    batches: [ObjectRef]
    type: String
  }
`
