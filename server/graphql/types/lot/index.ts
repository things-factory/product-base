import { Lot } from './lot'
import { NewLot } from './new-lot'
import { LotPatch } from './lot-patch'

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
  lots: [Lot]
  lot(id: String!): Lot
`

export const Types = [Lot, NewLot, LotPatch]
