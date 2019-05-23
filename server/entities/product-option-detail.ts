import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { ProductOption } from './product-option'

@Entity('product-option-details')
@Index(
  'ix_product-option-detail_0',
  (productOptionDetail: ProductOptionDetail) => [productOptionDetail.domain, productOptionDetail.name],
  { unique: true }
)
export class ProductOptionDetail extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @OneToMany(type => ProductOption, productOption => productOption.details)
  productOption: ProductOption

  @Column('text', {
    nullable: true
  })
  description: string
}
