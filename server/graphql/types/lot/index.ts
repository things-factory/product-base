import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { Lot } from './lot'
import { LotList } from './lot-list'
import { LotPatch } from './lot-patch'
import { NewLot } from './new-lot'

export const Mutation = `
  createLot (
    lot: NewLot!
  ): Lot

  updateLot (
    id: String!
    patch: LotPatch!
  ): Lot

  deleteLot (
    id: String!
  ): Lot

  publishLot (
    id: String!
  ): Lot
`

export const Query = `
  lots(filters: [Filter], pagination: Pagination, sortings: [Sorting]): LotList
  lot(id: String!): Lot
`

export const Types = [Filter, Pagination, Sorting, Lot, NewLot, LotPatch, LotList]
