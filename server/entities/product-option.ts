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
import { ProductOptionDetail } from './product-option-detail'

@Entity()
@Index('ix_product-option_0', (productOption: ProductOption) => [productOption.domain, productOption.name], {
  unique: true
})
export class ProductOption {
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

  @ManyToOne(type => Product)
  product: Product

  @OneToMany(type => ProductOptionDetail, productOptionDetail => productOptionDetail.productOption)
  details: ProductOptionDetail[]

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