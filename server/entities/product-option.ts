import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProductOptionDetail } from './product-option-detail'
import { Product } from './product'

@Entity('product-options')
@Index('ix_product-option_0', (productOption: ProductOption) => [productOption.domain, productOption.name], {
  unique: true
})
export class ProductOption extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @ManyToOne(type => Product)
  product: Product

  @OneToMany(type => ProductOptionDetail, productOptionDetail => productOptionDetail.productOption)
  details: ProductOptionDetail[]
}
