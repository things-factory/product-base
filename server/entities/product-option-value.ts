import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ProductOption } from './product-option'

@Entity()
@Index(
  'ix_product-option-value_0',
  (productOptionValue: ProductOptionValue) => [productOptionValue.domain, productOptionValue.id],
  { unique: true }
)
export class ProductOptionValue {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain, {
    nullable: false
  })
  domain: Domain

  @ManyToOne(
    type => ProductOption,
    productOption => productOption.productOptionValues,
    {
      nullable: false
    }
  )
  productOption: ProductOption

  @Column()
  name: string

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
