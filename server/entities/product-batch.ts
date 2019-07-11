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

@Entity()
@Index('ix_product-batch_0', (productBatch: ProductBatch) => [productBatch.domain, productBatch.name], { unique: true })
export class ProductBatch {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @Column()
  yourName: string

  @OneToMany(type => Lot, lot => lot.productBatch)
  lots: Lot[]

  @Column('float')
  qty: number

  @Column()
  state: string

  @Column({
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
