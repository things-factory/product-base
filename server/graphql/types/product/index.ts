import { Product } from './product'
import { NewProduct } from './new-product'
import { ProductPatch } from './product-patch'

export const Mutation = `
  createProduct (
    product: NewProduct!
  ): Product

  updateProduct (
    id: String!
    patch: ProductPatch!
  ): Product

  deleteProduct (
    id: String!
  ): Product

  publishProduct (
    id: String!
  ): Product
`

export const Query = `
  products: [Product]
  product(id: String!): Product
`

export const Types = [Product, NewProduct, ProductPatch]
