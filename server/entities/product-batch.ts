import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Lot } from './lot'

@Entity('product-batches')
@Index('ix_product-batch_0', (productBatch: ProductBatch) => [productBatch.domain, productBatch.name], { unique: true })
export class ProductBatch {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  yourName: string

  @OneToMany(type => Lot, lot => lot.productBatch)
  lots: Lot[]

  @Column('float')
  qty: number

  @Column('text')
  state: string

  @Column('text', {
    nullable: true
  })
  description: string

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
