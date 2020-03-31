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
import { Product } from './product'
import { ProductOptionValue } from './product-option-value'

@Entity()
@Index('ix_product-option_0', (productOption: ProductOption) => [productOption.domain, productOption.id], {
  unique: true
})
export class ProductOption {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain, {
    nullable: false
  })
  domain: Domain

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @OneToMany(
    type => ProductOptionValue,
    productOptionValue => productOptionValue.productOption
  )
  productOptionValues: ProductOptionValue[]

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
