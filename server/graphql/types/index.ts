import * as Product from './product'
import * as BizplaceProduct from './bizplace-product'

export const queries = [Product.Query, BizplaceProduct.Query]

export const mutations = [Product.Mutation, BizplaceProduct.Mutation]

export const types = [...Product.Types, ...BizplaceProduct.Types]
