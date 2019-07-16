import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewProduct } from './new-product'
import { Product } from './product'
import { ProductList } from './product-list'
import { ProductPatch } from './product-patch'

export const Mutation = `
  createProduct (
    product: NewProduct!
  ): Product

  updateProduct (
    name: String!
    patch: ProductPatch!
  ): Product

  deleteProduct (
    name: String!
  ): Product

  publishProduct (
    name: String!
  ): Product
`

export const Query = `
  products(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ProductList
  product(name: String!): Product
`

export const Types = [Filter, Pagination, Sorting, Product, NewProduct, ProductPatch, ProductList]
