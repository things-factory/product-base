import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Index,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'
import { ProductOptionValue } from './product-option-value'
import { ProductSet } from './product-set'

@Entity()
@Index(
  'ix_product-set-option_0',
  (productSetOption: ProductSetOption) => [productSetOption.domain, productSetOption.id],
  { unique: true }
)
export class ProductSetOption {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @ManyToOne(type => ProductSet)
  productSet: ProductSet

  @ManyToOne(type => ProductOptionValue)
  productOptionValue: ProductOptionValue

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
