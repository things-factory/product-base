import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Product } from '.'

@Entity('product-batches')
@Index('ix_product-batch_0', (productBatch: ProductBatch) => [productBatch.domain, productBatch.name], { unique: true })
export class ProductBatch extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @OneToMany(type => Product, product => product.productBatch)
  products: Product[]

  @Column('text', {
    nullable: true
  })
  description: string
}
