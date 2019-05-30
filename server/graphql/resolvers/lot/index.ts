import { lotResolver } from './lot'
import { lotsResolver } from './lots'

import { updateLot } from './update-lot'
import { createLot } from './create-lot'
import { deleteLot } from './delete-lot'

export const Query = {
  ...lotsResolver,
  ...lotResolver
}

export const Mutation = {
  ...updateLot,
  ...createLot,
  ...deleteLot
}
