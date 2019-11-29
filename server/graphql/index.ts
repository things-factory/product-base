import * as resolvers from './resolvers'
import * as typeDefs from './types'

export { createProduct, deleteProduct, deleteProducts, updateProduct } from './resolvers/product'

export const schema = {
  typeDefs,
  resolvers
}
