import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column, CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm'
import { Product } from './product'

@Entity()
@Index('ix_product-set_0', (productSet: ProductSet) => [productSet.domain, productSet.id], { unique: true })
export class ProductSet {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @ManyToOne(type => Domain, {
    nullable: false
  })
  domain: Domain

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @ManyToOne(type => Product)
  product: Product

  @ManyToOne(type => ProductSet)
  productSupersede: ProductSet

  @Column()
  type: string

  @Column({ nullable: true })
  expirationPeriod: number

  @Column({ nullable: true })
  lengthUnit: string

  @Column({ nullable: true })
  weightUnit: string

  @Column('float', { nullable: true })
  weight: number

  @Column('float', { nullable: true })
  density: number

  @Column('float', { nullable: true })
  width: number

  @Column('float', { nullable: true })
  depth: number

  @Column('float', { nullable: true })
  height: number

  @Column({ nullable: true })
  auxUnit1: string

  @Column({ nullable: true })
  auxValue1: string

  @Column({ nullable: true })
  auxUnit2: string

  @Column({ nullable: true })
  auxValue2: string

  @Column({ nullable: true })
  auxUnit3: string

  @Column({ nullable: true })
  auxValue3: string

  @ManyToOne(type => User, { nullable: true })
  creator: User

  @ManyToOne(type => User, { nullable: true })
  updater: User

  @Column()
  status: string

  @Column()
  packingType: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
