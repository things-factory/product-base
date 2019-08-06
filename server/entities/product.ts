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
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { ProductOption } from './product-option'

@Entity('products')
@Index('ix_product_0', (product: Product) => [product.domain, product.bizplace, product.name], { unique: true })
@Index('ix_product_1', (product: Product) => [product.domain, product.bizplace, product.refTo])
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToMany(type => Bizplace)
  bizplace: Bizplace

  @Column()
  name: string

  @Column({
    nullable: true
  })
  yourName: string

  @ManyToOne(type => Product, product => product.aliases)
  refTo: Product

  @OneToMany(type => Product, product => product.refTo)
  aliases: Product[]

  @OneToMany(type => ProductOption, productOption => productOption.product)
  options: ProductOption[]

  @Column()
  type: string

  @Column()
  unit: string

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
