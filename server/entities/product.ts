import { User } from '@things-factory/auth-base'
import { Bizplace } from '@things-factory/biz-base'
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
import { ProductOption } from './product-option'

@Entity('products')
@Index(
  'ix_product_0',
  (product: Product) => [product.domain, product.bizplace, product.name, product.description, product.weight],
  { unique: true }
)
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain, {
    nullable: false
  })
  domain: Domain

  @ManyToOne(type => Bizplace, {
    nullable: false
  })
  bizplace: Bizplace

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @ManyToOne(type => Product)
  productRef: Product

  @OneToMany(
    type => ProductOption,
    productOption => productOption.product
  )
  productOptions: ProductOption[]

  @Column()
  type: string

  @Column({ nullable: true })
  weightUnit: string

  @Column('float', { nullable: true })
  weight: number

  @Column('float', { nullable: true })
  weightRatio: number

  @Column({ nullable: true })
  lengthUnit: string

  @Column('float', { nullable: true })
  width: number

  @Column('float', { nullable: true })
  depth: number

  @Column('float', { nullable: true })
  height: number

  @Column({ nullable: true })
  auxUnit1: string

  @Column('float', { nullable: true })
  auxValue1: number

  @Column({ nullable: true })
  auxUnit2: string

  @Column('float', { nullable: true })
  auxValue2: number

  @Column({ nullable: true })
  auxUnit3: string

  @Column('float', { nullable: true })
  auxValue3: number

  @ManyToOne(type => User, { nullable: true })
  creator: User

  @ManyToOne(type => User, { nullable: true })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
