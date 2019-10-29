import { gql } from 'apollo-server-koa'

export const ProductPatch = gql`
  input ProductPatch {
    id: String
    name: String
    description: String
    productRef: ObjectRef
    weight: Float
    productOptions: [ObjectRef]
    batches: [ObjectRef]
    type: String
    cuFlag: String
  }
`
